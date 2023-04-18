let url = 'https://jsonplaceholder.typicode.com/todos/1'
async function getData() {
    try {
        let response = await fetch(url)
        let result = await response.json()
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}
getData()
