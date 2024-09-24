export function HttpRequest(url, options = {}){
    return fetch(url, options)
    .then(response => {
        return response.json()
    })
    .then(data => {
        return data;
    })
}