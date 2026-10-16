const police = document.getElementById("police");

document.addEventListener("mousemove", function(event) {
    police.style.left = event.clientX + "px";
    police.style.top = event.clientY + "px";
});

const button = document.getElementById("myButton");

button.addEventListener("mouseover", function () {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
    button.style.transform = "none";
});