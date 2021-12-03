import { HttpMethod, StressConfiguration, StressProperties } from './types'

const workers = 50
const timeToRunInSeconds = 600
const url = "https://192.168.26.130:5001"
const paths = ["/Home/Index", "/Login/Index", "/Login/Register"];
const workerInterval = 100
const stressProperties: StressProperties = {
    requestOptions: {
        headers: {
            "Content-Type": "application/json"
        },
        method: HttpMethod.GET
    },
}

export const stressTestConfiguration: StressConfiguration = {
    workers,
    timeToRunInSeconds,
    url,
    paths,
    workerInterval,
    stressProperties
}