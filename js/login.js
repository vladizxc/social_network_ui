const loginFormElement = document.querySelector("#login")

loginFormElement.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(loginFormElement)
    const params = new URLSearchParams(formData)
    const paramsToString = params.toString()

    fetch(`http://localhost:8080/login`, {
        method: "POST",
        body: params,
        credentials: "include",
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
        }
    }).then((response) => {
        console.log("response: ", response)
        return response.json()
    }).then((json) => {
        console.log("json: ", json)
        window.location.replase(".main-page.html") 
    })
})