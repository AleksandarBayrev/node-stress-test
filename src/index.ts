import { stress } from './stress'
import { stressTestConfiguration } from './config'

(function () {
    stress(
        stressTestConfiguration.workers,
        stressTestConfiguration.timeToRunInSeconds,
        stressTestConfiguration.url,
        stressTestConfiguration.stressProperties
    )
})()