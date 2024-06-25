//PUT-->updating the user data at server side

let userRequestIdEle=document.getElementById("userInput");
let userRequestBodyEle=document.getElementById("requestBody");
let sendPutRequestBtnEle=document.getElementById("sendPutRequestBtn");

let requestStatusEle=document.getElementById("requestStatus");
let responseBodyEle=document.getElementById("httpResponse");

let loadingEle=document.getElementById("loading");

function apply(){

let urlText="https://gorest.co.in/public-api/users/"+userRequestIdEle.value;

let bodyData=userRequestBodyEle.value;

console.log(urlText);
   let options={
    method:"PUT",
    headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer f3b327e706c853240dd37807d3eb5864e7c815010f0ccb6d15f38351eff47b4b"

        },
    body:bodyData
   }
   fetch(urlText,options)
   .then(function(response){
    return response.json();
   })
   .then(function(jsonData){
   requestStatusEle.textContent=jsonData.code;
   responseBodyEle.textContent=JSON.stringify(jsonData);
   console.log(jsonData);
   })
}



sendPutRequestBtnEle.addEventListener("click",apply);

//let see with GET METHOD

/*let urlText=document.getElementById("urlFor").textContent;

let options={
 method:"GET"
}
fetch(urlText,options)
.then(function(response){
    console.log("entered")
    return response.json();

})
.then(function(jsonData){
    
})*/