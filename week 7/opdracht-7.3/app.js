let count = 0;
function plus() {
    if (count > 9) {
        count = 0;
    } else {
        count += 1;
        document.getElementById("getal").innerText = "Getal = " + count
    }
}
