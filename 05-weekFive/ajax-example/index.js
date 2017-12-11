main();


function main() {
  let ol = document.createElement('ol');
  let body = document.getElementsByTagName('body')[0];
  body.appendChild(ol);
  window.setTimeout(someFn, 2000)
}


function someFn() {
  let ol = document.getElementsByTagName('ol')[0];
  return fetch('https://dog.ceo/api/breeds/list/all').then(function(response) {
      console.log('this is not my data yet. I must turn is into JSON', response);
      return response.json();
  }).then((res) => {
      console.log('this is the valid data i can use', res)
      for (var dog in res.message) {
        let newLi = document.createElement('li');
          newLi.innerText = dog;
          ol.appendChild(newLi)
      }
      // this is where I have access to data
  })
}

// TAKEAWAYS:
/*
- use the fetch() method and pass in a valid url as a string.
  - This will make an HTTP request to the API/server (like the youtube api)
- .then() is chained with a dot . after the fetch method. --> fetch(someURL).then()
  - .then() takes in a callback function as its argument
  - fetch() will pass .then() a embed-response
- The response given from the HTTP is technically a bufffer, not the information we're interested in.
We must turn the data response in JSON format so we can start to manipulate and use the data with JavaScript.
- We return from the callback function with calling .json() on the response --> response.json()
- We must chain another .then() with another callback. IN THIS function block, you now have the data to freely use.


*/
