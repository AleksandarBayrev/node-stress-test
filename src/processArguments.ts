import { Props } from "./types"

const validProps = ['--workers', '--timeToRunInSeconds', '--url', '--paths']

export const processArguments = (process: NodeJS.Process): Props[] => {
    return process.argv
        .slice(2)
        .map(x => {
            const props = x.split('=')
            if (validProps.indexOf(props[0]) === -1) {
                return {
                    option: "",
                    value: ""
                }
            }
            props[0] = props[0].replace("--", "")
            return {
                option: props[0],
                value: props[1]
            }
        })
        .filter(x => x.option !== '' && x.value !== '');
}