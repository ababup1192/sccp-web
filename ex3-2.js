function createLog(text){
    var paragraph = document.createElement("p");
    var textNode = document.createTextNode(text);
    paragraph.appendChild(textNode);
    return paragraph;
}

function createList(log, even){
    var name = even ? "saki" : "miki";
    var list = document.createElement("li");
    list.appendChild(log);
    list.setAttribute("class", name);
    return list;
}

var logs = Immutable.List.of(
    "「あなたは咲さんですか。美樹です。」",
    "「はい。咲と呼んでください。」",
    "「咲さんは柔道部員ですか。」",
    "「はい、そうです。」"
);


var log = document.getElementById("log");

var ul = document.createElement("ul");

logs.reverse().map(createLog).map(function(l, idx){
    return createList(l, idx % 2 == 0);
}).forEach(function(l){
    ul.appendChild(l);
});

log.appendChild(ul);

/*

function createList(log, even){

    var name = even ? "saki" : "miki";

    var c = 'class="' + name +  '"';
    return "<li " + c + ">" + log + "</li>";
}


function createLog(text){
    return "<p>" + text + "</p>";
}

function createList(log, even){
    var name = even ? "saki" : "miki";

    var c = 'class="' + name +  '"';
    return "<li " + c + ">" + log + "</li>";
}



var logs = Immutable.List.of(
    "「あなたは咲さんですか。美樹です。」",
    "「はい。咲と呼んでください。」",
    "「咲さんは柔道部員ですか。」",
    "「はい、そうです。」"
);


var log = document.getElementById("log");

var ul = document.createElement("ul");

ul.innerHTML = logs.reverse().map(createLog).map(function(l, idx){
    return createList(l, idx % 2 == 0);
}).join("\n");

log.appendChild(ul);

*/
