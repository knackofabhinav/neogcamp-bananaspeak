// Selectors
var btnTranslate = document.querySelector("#btn-translate")
var inputText = document.querySelector("#text-input")
var outputText = document.querySelector("#outputDiv")

// Server API
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

// For Error Handling
function errorHandler(error) {
    console.log("error occured", error);
    alert("Server Takes Only 5 requests per hour so try again after sometime. Sorry :(")
}

// defining what to do when the button is clicked => callback
btnTranslate.addEventListener("click", 
    function callback(){
        fetch(serverUrl + "?text=" + inputText.value)
        .then(response => response.json())
        .then(json => outputText.innerText = json.contents.translated)
        .catch(errorHandler)
})
