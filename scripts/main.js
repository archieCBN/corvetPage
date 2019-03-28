var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc = 'images/chevrollet-corvette-stingray.jpg') {
        myImage.setAttribute ('src', 'images/chevrolet-corvette-C3.jpg');
    } else {
        myImage.setAttribute('src', 'images/chevrollet-corvette-stingray.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName)
    myHeading.innerHTML = 'Corvet is cool..., and you too, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHtml = 'Corvet is cool..., and you too, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}