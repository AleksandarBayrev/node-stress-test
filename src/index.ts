import { stress } from "./stress"
import { HttpMethod, StressProperties } from "./types"

(function () {
    const workers = 150
    const timeToRunInSeconds = 60
    const url = "https://192.168.26.130:5001"
    const stressProperties: StressProperties = {
        requestOptions: {
            headers: {
                "Content-Type": "application/json"
            },
            method: HttpMethod.GET
        },
    }
    stress(
        workers,
        timeToRunInSeconds,
        url,
        stressProperties
    )
})()