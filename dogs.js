const DOG_URL = "https://dog.ceo/api/breeds/image/random";

dog = document.querySelector(".dog");

newDoggo();

function newDoggo() {
  dog.innerHTML = "<img src=loading.gif />";
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "picture of dog";
      dog.innerHTML = '<img class="img-fluid img-thumbnail" src="' + img.src + '" alt="' + img.alt + '" />';
    });
}
