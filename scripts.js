function ChangeSong(clickedElement){
    var audio = document.getElementById("audio");
    var source = document.getElementById("audioSource");
    source.src = clickedElement.getAttribute("data-value");

    audio.load();
}

