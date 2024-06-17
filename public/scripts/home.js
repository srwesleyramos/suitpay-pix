const form = document.getElementById("form")
const button = document.getElementById("button")
const requestNumber = document.getElementById('requestNumber')
const dueDate = document.getElementById('dueDate')
const amount = document.getElementById('amount')
const name = document.getElementById('name')
const documentNumber = document.getElementById('document')
const email = document.getElementById('email')
const clientId = document.getElementById('clientId')
const clientSecret = document.getElementById('clientSecret')

function updateButton() {
    if (button.disabled) {
        button.disabled = false
        button.innerText = "Enviar"
    } else {
        button.disabled = true
        button.innerText = "Aguarde..."
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='))

    fetch("/api/pix", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token ? token.split('=')[1] : null
        },
        body: JSON.stringify({
            requestNumber: requestNumber.value,
            dueDate: dueDate.value,
            amount: amount.value,
            name: name.value,
            document: documentNumber.value,
            email: email.value,
            clientId: clientId.value,
            clientSecret: clientSecret.value
        })
    })
        .then(response => response.json())
        .then(data => alert(data.message))
        .finally(() => updateButton())

    updateButton()
})