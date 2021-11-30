import { buildUrl } from './buildUrl'
import { v4, fetch } from './dependencies'
import { promiseHandlers, generateRequestOptions } from './helpers';
import { StressProperties } from './types'


export const stress = (
    maxCalls: number,
    secondsToRun: number,
    url: string,
    paths: string[],
    properties: StressProperties
) => {
    let intervals: (() => NodeJS.Timeout)[] = []
    for (let i = 0; i < maxCalls; i++) {
        intervals.push(() =>
            setInterval(() => {
                paths.map(path => {
                    const resultUrl = buildUrl(url, path)
                    const workerId = i + 1
                    fetch(
                        resultUrl,
                        generateRequestOptions(v4(), properties.value, properties.requestOptions)
                    )
                        .then(x => promiseHandlers.handleSuccess(x, resultUrl, workerId))
                        .catch(err => promiseHandlers.handleError(err, workerId))
                })
            }, 100))
    }

    const resultIntervals: NodeJS.Timeout[] = []
    intervals.map(x => resultIntervals.push(x()))

    setTimeout(() => {
        resultIntervals.map(x => clearInterval(x))
    }, 1000 * secondsToRun)
}