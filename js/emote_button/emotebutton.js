"use strict";

var anyaEmotesJson;
fetch('https://cdn.jsdelivr.net/gh/ramarble/marbl@staging/anyaEmotes.json')
    .then(response => response.json())
    .then(data => {
        anyaEmotesJson = data;
    })
    .catch(error => {
        console.error(error);
    });


function drawRandomEmoteFromObject(jsonObject) {
    return jsonObject[Math.floor(Math.random()*jsonObject.length)]
} 

$("#emotelistbtn").click(function(){
    $(this).css("background-image","url("+drawRandomEmoteFromObject(anyaEmotesJson.emotes)+")");
}).html("")

