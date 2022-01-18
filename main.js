document.getElementById("display_page").style.display = "none";
document.getElementById("changed_page").style.display = "none";

let answer = [];
let newArray = [];

document.getElementById("btn_start").addEventListener('click', function () {

    for (var i = 0; i < 3; i++) {
        
        answer[i] = prompt("Please enter a word:");
    }

    document.getElementById('li0').innerHTML = answer[0];
    document.getElementById('li1').innerHTML = answer[1];
    document.getElementById('li2').innerHTML = answer[2];

    document.getElementById("display_page").style.display = "block";
    document.getElementById("start_page").style.display = "none";
});

document.getElementById("btn_change_words").addEventListener('click', function() {

    for (var i = 0; i < 3; i++) {
    
        newArray = answer.map(changeFunction);
    }

    document.getElementById('li3').innerHTML = newArray[0];
    document.getElementById('li4').innerHTML = newArray[1];
    document.getElementById('li5').innerHTML = newArray[2];

    document.getElementById("changed_page").style.display = "block";
    document.getElementById("display_page").style.display = "none";
});

function changeFunction(oneWord) {
    return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
}