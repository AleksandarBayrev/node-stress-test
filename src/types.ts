import { HeadersInit } from "node-fetch"

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