/**
 * @param {Element} elm
 * @param {Object} options
 */
function typer(elm, options) {
    let stringPos = 0,
        caretDIV = document.createElement("span");

    caretDIV.setAttribute("style", "width: 5px; height: 100%;");
    caretDIV.innerHTML = "|";

    elm.parentElement.insertBefore(caretDIV, elm.nextSibling);

    let fluctuateCaret = setInterval(() => {
        if (caretDIV.style.display === "none")
            caretDIV.style.display = "inline-block";
        else
            caretDIV.style.display = "none";
    }, 200);

    let interval = setInterval(function () {
        if (stringPos === options.string.length) {
            clearInterval(interval);
            clearInterval(fluctuateCaret);
            caretDIV.style.display = "inline-block";
            return;
        }
        elm.innerHTML += options.string[stringPos++];
        for (let replacer in options.map) {
            elm.innerHTML = elm.innerHTML.replace(replacer, options.map[replacer])
        }
    }, options.typeSpeed);

}

export default typer;