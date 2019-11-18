const BASE_URL = "/api/v1/items/"

// grabs all the Items 
export async function getItems() {
    return fetch(`${BASE_URL}`)
        .then((res) => res.json())
}

// adds Item
export async function addItem(item) {
    return fetch(`${BASE_URL}add`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(item)
    })
        .then((res) => res.json())
}


