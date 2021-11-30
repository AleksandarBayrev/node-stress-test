import fetch, { HeadersInit } from 'node-fetch'
import { v4 } from 'uuid'
import https from 'https'

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

export {
    fetch,
    HeadersInit,
    v4,
    httpsAgent
}