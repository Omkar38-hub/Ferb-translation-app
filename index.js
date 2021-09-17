var button=document.querySelector(".click");
var text=document.querySelector(".input");
var urlSelection="https://api.funtranslations.com/translate/ferb-latin.json";
// attaching text with url
function createApi(input_given)
{
  return urlSelection+"?"+"text="+input_given;
}
// function for error handling
function errorHandling(error)
{
  console.log("Error"+error);
  alert("Something went wrong!.Please try again later.")
}
button.addEventListener("click",function(){
   fetch(createApi(text.value)) // fetch function to Api data
   .then(response=>response.json())
   .then(json=>{
     var translatedText=json.contents.translated;
     document.querySelector(".output").innerText=translatedText;
   }).catch(errorHandling)
})
