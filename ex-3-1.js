var passage = document.getElementById("passage");
var passageText = passage.innerHTML;
var length = document.createTextNode("word count is " + passageText.length);

document.getElementById("count").appendChild(length);

