"use strict";

const mikoDing = document.createElement("audio");
mikoDing.setAttribute('src','https://cdn.jsdelivr.net/gh/om3tcw/r@emotes/soundposts/sounds/om3tcw.ogg');
mikoDing.loop = true;
mikoDing.volume = 0.1;
document.getElementsByClassName("navbar-brand")[0].onmouseenter = () => mikoDing.play();
document.getElementsByClassName("navbar-brand")[0].onmouseleave = () => mikoDing.pause();
