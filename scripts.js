function wordFinder(){
    var input = document.getElementById("user_input");
    var new_word = input.value.toLowerCase();
    var word_bank = document.getElementById("word_bank");
    var word = word_bank.getElementsByTagName("li");
    var found = false;

    for(index = 0; index < word.length; index++){
        a = word[index].getElementsByTagName("a")[0];
        var value = a.textContent || a.innerText;
        if(value.toLowerCase().indexOf(new_word) > -1){
            word[index].style.display="";
            found = true;
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