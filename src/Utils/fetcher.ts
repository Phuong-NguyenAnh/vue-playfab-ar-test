
function getRequestHeaders() {
    // const accountToken = localStorage.getItem('at') as string
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json')
    // requestHeaders.set('AccountToken', accountToken)
    requestHeaders.set('Cache-Control', 'reload')
    return requestHeaders
}

export const fetcher = {
    Post,
}

async function Post(url: string, body: object) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: getRequestHeaders()
    })
    return handleResponse(res)
}

function handleResponse(response: Response) {
    console.log(response)
    return response.text().then((text: string) => {
        const responded_data = tryParseJson(text)
        if (!responded_data) return Promise.reject(text)
        if (!response.ok) {
            if ([401, 403].includes(response.status) && localStorage.getItem('at')) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                // accountService.logout()
            }
            const error = responded_data?.message || response.statusText
            return Promise.reject(error)
        }
        return responded_data
    })
}

function tryParseJson(str: string): any | undefined {
    try {
        return JSON.parse(str)
    } catch (e) {
        return undefined
    }
}