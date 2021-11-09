function setBackground() {
    let myBodyElements = document.getElementsByTagName("p");

    let color = document.getElementById("color");
    for (let i = 0; i < myBodyElements.length; i++) {
        myBodyElements[i].style.background = color.value;
    }
}
