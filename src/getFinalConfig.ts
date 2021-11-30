import { Props, StressConfiguration } from "./types";

const getPaths = (parsedArray: string[], baseArray: string[]) => {
    return Array.isArray(parsedArray) && parsedArray.length ? parsedArray : baseArray
}

export const getFinalConfig = (params: Props[], baseConfig: StressConfiguration): StressConfiguration => {
    const workers = parseInt(params.find(x => x.option === 'workers')?.value || baseConfig.workers.toString())
    const timeToRunInSeconds = parseInt(params.find(x => x.option === 'timeToRunInSeconds')?.value || baseConfig.timeToRunInSeconds.toString())
    const url = params.find(x => x.option === 'url')?.value || baseConfig.url
    const paths = getPaths(params.find(x => x.option === 'paths')?.value.split(',') || [], baseConfig.paths)
 
    return {
        workers,
        timeToRunInSeconds,
        url,
        paths,
        stressProperties: baseConfig.stressProperties
    }
}