const form = document.getElementById("form")
const user = document.getElementById("user")
const pass = document.getElementById("pass")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: user.value,
            pass: pass.value
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                return alert(data.message)
            }

            document.cookie = `token=${data.token}`
            window.location.href = "/app"
        })
})