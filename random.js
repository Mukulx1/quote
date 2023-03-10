let api = fetch("https://api.adviceslip.com/advice")
api.then((value1)=>{
   return value1.json()
}).then((value2)=>{
   var advice = value2.slip.advice
   document.getElementById("code").innerHTML = `"${advice}"`;
})
const reload= ()=>{
   location.reload();
}
