var button=document.querySelector(".click");
var text=document.querySelector(".input");
var urlSelection="https://api.funtranslations.com/translate/minion.json";
// attaching text with url

function getCharacter(){
    var element=document.getElementById("choose").value;
    if(element==1)
    {
        console.log("minions");
        urlSelection="https://api.funtranslations.com/translate/minion.json";
    }
    else if(element==2)
    {
        console.log("Shakespeare");
        urlSelection="https://api.funtranslations.com/translate/shakespeare.json"
    }
    else if(element==3)
    {
        console.log("Oldenglish");
        urlSelection="https://api.funtranslations.com/translate/oldenglish.json"
    }
    else if(element==4)
    {
        console.log("Valspeak");
        urlSelection="https://api.funtranslations.com/translate/valspeak.json";

    }
    else if(element==5)
    {
        console.log("Yoda");
        urlSelection="https://api.funtranslations.com/translate/yoda.json"
    }
}
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
