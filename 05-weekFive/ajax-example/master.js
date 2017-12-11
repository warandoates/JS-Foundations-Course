init();

function init() {
    let newHeading = document.createElement('h4');
    let ol = document.createElement('ol');
    let body = document.querySelector('body');
    body.appendChild(ol);
    window.setTimeout(() => {
      return fetch('https://dog.ceo/api/breeds/list/all')
        .then((response) => {
          return response.json();
        }).then((res) => {
          for (var dog in res.message) {
            let newDog = document.createElement('li')
            newDog.innerText = dog;
            ol.appendChild(newDog)
          }
        })
    }, 1000);
}

/*
// I used window.setTimeout(someFn, timeDelay) to highlight that getting data takes time, its not instant. with
ajax requests, you can see once I get the data from the API, I can append it to the HTML page without
reloading the entire webpage.

*/
