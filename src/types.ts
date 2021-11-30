import { HeadersInit } from './dependencies'

export type Props = {
    option: string
    value: string
}

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
    paths: string[]
    stressProperties: StressProperties
}