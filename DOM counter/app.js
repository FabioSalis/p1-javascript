let btn = document.getElementById("btn");
let title = document.getElementById("h1")
let btn2 = document.getElementById("btn2")

let count = 0;

function counter(){
    count += 1;
    title.innerText = count + " keer geklikt";
    document.body.style.backgroundColor = "blue"
    btn.style.backgroundColor = "red"
}
function counter2(){
    count -= 1;
    title.innerText = count + " keer geklikt"
    document.body.style.backgroundColor = "red"
    btn2.style.backgroundColor = "blue"
}

