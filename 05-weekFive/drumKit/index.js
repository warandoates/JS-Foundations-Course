function main() {
  window.addEventListener("keydown", function(event) {
    let audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    if (!audio) {
      return;
    }

    let key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    audio.currentTime = 0;

    audio.play();

    key.classList.add("playing");

    let keys = document.getElementsByClassName("key");
    for (let i = 0; i < keys.length; i++) {
      let currentKey = keys[i];
      currentKey.addEventListener("transitionend", removeClassFunction);
    }
  });
}

main();

function removeClassFunction(evt) {
  if (evt.propertyName !== "transform") {
    return;
  }
  let key = evt.target;
  key.classList.remove("playing");
}
