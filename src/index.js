import "./styles.css";

if(document.readyState !== "loading") {
    initializeCode()
} else {
    document.addEventListener("DOMContentLoaded", function() {
        initializeCode()
    })
}
function initializeCode() {
    const myButton = document.getElementById("my-button")
    myButton.addEventListener("click", function() {
        
    })
}
