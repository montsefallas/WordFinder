document.addEventListener("DOMContentLoaded", function () {
    fetchWords();
});

function fetchWords(){
    fetch("words-small.json")
        .then((response) => {
            if (!response.ok){
                throw new Error("Failed to fetch JSON file");
            }
            return response.json();
        })
        .then((data) => {
            populateWordBank(data.words);
        });
}

function populateWordBank(words) {
    const wordBank = document.getElementById("word_bank");
    wordBank.innerHTML = "";

    words.forEach((word) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = word;
        li.appendChild(a);
        wordBank.appendChild(li);
    });
}

function wordFinder(){
    var input = document.getElementById("user_input");
    var new_word = input.value.toLowerCase();
    var word_bank = document.getElementById("word_bank");
    var word = word_bank.getElementsByTagName("li");

    for(var index = 0; index < word.length; index++){
        var a = word[index].getElementsByTagName("a")[0];
        var value = a.textContent || a.innerText;
        if(value.toLowerCase().indexOf(new_word) > -1){
            word[index].style.display="";
        }
        else{
            word[index].style.display = "none";
        }
    }
}

function clearInput(){
    var input = document.getElementById("user_input");
    input.value = "";
    wordFinder();
}