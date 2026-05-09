let btn = document.querySelector("button");

btn.addEventListener("click",function() {
    let h1 = document.querySelector("h1");
    let randomgenerate = call();
    h1.innerText = randomgenerate;
    let div = document.querySelector("div");
    div.style.backgroundColor = randomgenerate;
    console.log("Color Updated");
});

function call() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

