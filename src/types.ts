import { HeadersInit } from './dependencies'

export enum HttpMethod {
    GET = "GET",
    POST = "POST"
}

export type RequestOptions = {
    headers: HeadersInit | undefined
    method: HttpMethod
}

export type StressProperties = {
    requestOptions: RequestOptions
    value?: string | object
}

export type StressConfiguration = {
    workers: number
    timeToRunInSeconds: number
    url: string
    stressProperties: StressProperties
}