export const buildUrl = (url: string, path: string) => {
    let resultUrl: string = ''
    if (url.length === 0) {
        return resultUrl
    }
    if (url.length
        && url[url.length - 1] === '/'
        && path.length
        && path[0] === '/'
    ) resultUrl = `${url}${path.substring(1)}`

    if (url.length
        && url[url.length - 1] !== '/'
        && path.length
        && path[0] === '/'
    ) resultUrl = `${url}${path}`

    if (url.length
        && url[url.length - 1] === '/'
        && path.length
        && path[0] !== '/'
    ) resultUrl = `${url.substring(0, url.length - 1)}/${path}`

    if (url.length
        && url[url.length - 1] !== '/'
        && path.length
        && path[0] !== '/'
    ) resultUrl = `${url}/${path}`

    return resultUrl
}