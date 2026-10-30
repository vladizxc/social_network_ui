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

        if(response.redirected) {
            window.location.href= "http://127.0.0.1:5500/html/main-page.html"
            return
        }
        console.log("response: ", response)
    }).catch(error => {
        console.error(error)
    })
    
})