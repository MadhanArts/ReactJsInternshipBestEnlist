function getFormvalue() {
    let form = document.getElementById("form1");
    let resultText = "";
    for (let i = 0; i < form.length; i++) {
        if (form.elements[i].value !== "Submit") {
            console.log(form.elements[i].value);
            resultText += form.elements[i].value;
            resultText += "\n";
        }
    }

    document.getElementById("result").innerHTML = resultText;
    return false;
}
