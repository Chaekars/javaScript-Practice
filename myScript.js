
var markovChainMatrix = [];
var ALPHA = 26;

function loadMatrixData(contents) {
    var tempMarkovArray = new Array(ALPHA);
    
    var alphaCountArray = new Array(ALPHA);
    
    var splitContents = contents.split(/\n/); 
    
    for(var i = 0; i < splitContents; i++) {
        var names = splitContents[i];
        
    }
}

function readTextFile(e) {
    var file = e.target.files[0];
    if(!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        loadMatrixData(contents);
    };
    reader.readAsText(file);
}

function capitalize(name) {
    name = name.toLowerCase;
    var firstLetter = name.charAt(0);
    name = name.substring(1,name.length);
    name = ((firstLetter-32)+name);
    return name;
}

function findNextLetter(name, i) {
    var randomValue = Math.random;
    var tempIncValue = 0;
    var letterStep = 0;
    
    while(tempIncValue < randomValue)
    {
        tempIncValue += markovChainMatrix[(name.charAt(i-1)-65)][letterStep];
        letterStep++;
    }
    return (letterStep-1+65);
}

function validateInput() {
    var numNames = document.forms["input"]["numberOfNames"].value;
    var minLength = document.forms["input"]["minLength"].value;
    var maxLength = Document.forms["input"]["maxLength"].value;
    
    if(document.getElementById("fileName").files.length == 0) {
        alert("No File Inputted");
        return false;
    } else if(isNaN(numNames) || numNames == "") {
        alert("Number of Names must be a number");
        return false;
    } else if(isNaN(minLength) || minLength == "") {
        alert("Minimum Name Length must be a number");
        return false;
    } else if(isNan(maxLength) || maxLength == "") {
        alert("Maximum Name Length must be a number");
        return false;
    }
    return true;
}

function enterPressed() {
    if(!validateInput()) {
        return;
    }
};