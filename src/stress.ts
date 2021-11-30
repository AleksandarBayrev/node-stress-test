import { httpsAgent, v4, fetch } from "./dependencies";
import { HttpMethod, RequestOptions, StressProperties } from "./types";

const getBody = (key: string, value: string | object | undefined, requestOptions: RequestOptions) => {
    if (requestOptions.method != HttpMethod.POST) {
        return {};
    }
    return {
        body: JSON.stringify({ key, value })
    }
}

const generateRequestOptions = (key: string, value: string | object | undefined, requestOptions: RequestOptions) => ({
    ...requestOptions,
    ...getBody(key, value, requestOptions),
    agent: httpsAgent
})

export const stress = (maxCalls: number, secondsToRun: number, url: string, properties: StressProperties) => {
    let intervals: (() => NodeJS.Timeout)[] = []
    for (let i = 0; i < maxCalls; i++) {
        intervals.push(() =>
            setInterval(() => fetch(url, generateRequestOptions(v4(), properties.value, properties.requestOptions))
                .then(x => console.log(`Request from worker ${i + 1} finished, status = ${JSON.stringify(x)}`))
                .catch(err => console.error(`Error: ${err}`)), 100)
        )
    }

    const resultIntervals: NodeJS.Timeout[] = []
    intervals.map(x => resultIntervals.push(x()))

    setTimeout(() => {
        resultIntervals.map(x => clearInterval(x))
    }, 1000 * secondsToRun)
}