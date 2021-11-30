import { httpsAgent } from './dependencies'
import { HttpMethod, RequestOptions } from './types'

export const promiseHandlers = {
    handleSuccess: (x: any, resultUrl: string, workerId: number) => console.log(`Request from worker ${workerId} finished for url ${resultUrl}, status = ${JSON.stringify(x)}`),
    handleError: (err: any, workerId: number) => console.error(`Error from worker ${workerId}: ${err}`)
}


export const getBody = (
    key: string,
    value: string | object | undefined,
    requestOptions: RequestOptions
) => {
    if (requestOptions.method != HttpMethod.POST) {
        return {};
    }
    return {
        body: JSON.stringify({ key, value })
    }
}

export const generateRequestOptions = (
    key: string,
    value: string | object | undefined,
    requestOptions: RequestOptions
) => ({
    ...requestOptions,
    ...getBody(key, value, requestOptions),
    agent: httpsAgent
})