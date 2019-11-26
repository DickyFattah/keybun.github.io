var teksContainer = document.getElementById('id');
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-2.json')
  ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
  };
  ourRequest.send();
});
function renderHTML(data) {
  var htmlString = "Berikut merupakan contohwdqwdqwdsacwqQWACQWACQWAESCCWXCWQC"
  teksContainer.insertAdjacentHTML('beforeend', htmlString)

}
