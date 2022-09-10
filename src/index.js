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
    const addButton = document.getElementById("add-data")
    const list = document.getElementById("list")
    
    myButton.addEventListener("click", function() {
        console.log("Hello world!")
        document.getElementById("header").innerHTML = "My notebook"
    })
    addButton.addEventListener("click", function() {
        var newItem = document.createElement("li")
        newItem.appendChild(document.createTextNode(document.getElementById("textarea").value))
        list.appendChild(newItem)
        
    })
}
