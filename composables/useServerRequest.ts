import {useFetch, UseFetchOptions} from '#app';
import {merge} from 'lodash'

export const useServerRequest = <T=unknown>(url: string, opts?: UseFetchOptions<T,unknown>)=>{
    const token = useCookie('token')
    const runtimeConfig = useRuntimeConfig()
    const defaultOptions: UseFetchOptions<unknown> = {
        baseURL: runtimeConfig.public.baseURL,
        onRequest({options}) {
            options.headers = (options.headers || {}) as {[key:string]: string}
            if (token.value) {
                options.headers.Authorization = 'Bearer' + token.value
            }
        },
        onResponse({response}) {
            if (+response._data.code !== 200) {
                ElMessage.error(response._data.msg)
            }
        },
        onResponseError({response}) {
            ElMessage.error(response._data.msg)
        }
    }
    return useFetch<T>(url, merge(defaultOptions, opts) as any)
}