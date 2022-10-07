let budget = 100
let product = 60
function koop() {
if (product < budget) {
    document.getElementById("text").innerText = "U heeft genoeg geld!"
    document.getElementById("text").style.color = "green"
} else {
    document.getElementById("text").innerText = "Helaas, u heeft niet genoeg geld"
    document.getElementById("text").style.color = "red"
}
}