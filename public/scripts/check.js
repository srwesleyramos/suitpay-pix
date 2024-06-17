function check() {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='))

    fetch("/api/test", {
        method: "POST",
        headers: {
            "Authorization": token ? token.split('=')[1] : null
        }
    }).then((response) => {
        if (!response.ok) {
            window.location.href = "/app/login"
        }
    })
}

check()

setInterval(() => check(), 30000)