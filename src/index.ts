import { stress } from './stress'
import { stressTestConfiguration } from './config'
import { processArguments } from './processArguments'
import { getFinalConfig } from './getFinalConfig'

(function () {
    const params = processArguments(process)

    const finalConfig = getFinalConfig(params, stressTestConfiguration)
    console.log(finalConfig)
    stress(
        finalConfig.workers,
        finalConfig.timeToRunInSeconds,
        finalConfig.url,
        finalConfig.paths,
        finalConfig.stressProperties
    )
})()