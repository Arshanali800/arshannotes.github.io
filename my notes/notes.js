console.log("hello world");
alert("This website are in under construction")
showNotes();
//  agar hamara user agar  kuch type kare to wo local storage me save ho  jaye
// sabse pehle jab hum humne kaha ke localstorage me se hume noteso wala element chaye to isne ye check kia ke ke isme kuch hai to  isme notesObj ko array ke brabar rakhdo then humne notesObj me push kia jo humne tytpe kia tha jisse wo ek array ban gaya phir humne local storage ko update kia name notiso me json.stringyfy kardiya notesObj ko joek array tha aur use local storage me save kardiya phir jab dusri baar humne kuch likha to usme kuch phele se bhi tha jisse ki wo else statement me gaya usse kya hua ki notesObj jo ki phele se hi string array jese "[sdj]" tha usko parse kardiya yaani sirf array me jese wo phele tha phir humne isme apni type ki huyi value isme daldi phir baad me jab local storage to update kia gaya to usme phir notesObj ko stringify kardiya gaya ise ye hoga kia hum value ko dalenege to wo pehle array me ajayega phir string me hum isse kardenegee
//  aur title me hamne ek object banaya jisme title or text ki value hai usko push kardiya kha par notes obj ab notes obj array object bangaya hai ese jab parse karega to string array object ko array object me convert katdega
let addBtn = document.getElementById("btn");
addBtn.addEventListener("click", function (e) {

  let addTxt = document.getElementById("addtxt");
  let addTitle = document.getElementById("addtitle");

  // let addimp = document.getElementById()
  let notes = localStorage.getItem("noteso");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  
  let myobj = {
    title: addTitle.value,
    text: addTxt.value
  }

  notesObj.push(myobj);
  localStorage.setItem("noteso", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  // console.log(notesObj);
  showNotes();
});

// ke yaha pe hum show notes se call karenge jisse ki ye wale function me aake yeh kya kare ki phele to yeh local stortage se khga ki mujhe noteso  do to yeh check karea ki null he ki nahi null nhi hoga to yeh else me jake jo humne upar type kia hoga use json .parse ye use ek array banadega jiss hum isme foreach loop lagaeyege jiss iske sare element hume miljayege aur sath me index yaani 123 bhi 
// yaha par hum element.title likhenege kyunki ye object hai jisse object wo wala bhag miljayega  


function showNotes(){

  let notes = localStorage.getItem("noteso");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
       
        <div class=" noteCard my-3 mx-3 card" id = "${index}" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title" style="color: black;"> ${element.title}</h5>
            <p class="card-text" style="color: black;">${element.text}</p>
            <button id = "${index}" class="btn btn-primary" onclick = "deletenote(this.id)">Delete</button>
            <button id = "${index}" class="btn btn-primary" onclick = "impnote(this.id)">Mark as important</button>
          </div>
        </div> `
  });

  let notesElm = document.getElementById('note');
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "Nothing to show"
    notesElm.style.color = "red"
  }
}
// function to delete
//  upar humne buttton kii id ki jagah humne index likh take element ke sath sath isme hume alag number milsake
function deletenote(index) {
  // console.log("I am deleting");

  let notes = localStorage.getItem("noteso");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("noteso", JSON.stringify(notesObj));
  showNotes();
}
let search = document.getElementById('search');
search.addEventListener("input", function(){
  let inputval = search.value.toLowerCase()
  // console.log("input fired", inputval);
  let notecards = document.getElementsByClassName('noteCard');
  Array.from(notecards).forEach(function(element){
    let cardtxt = element.getElementsByTagName('p')[0].innerText;
    if(cardtxt.includes(inputval)){
      element.style.display = "block"
    }else{
      element.style.display = "none"
    }
    // console.log(cardtxt);
  })
})
// function to important
function impnote(index){
  console.log("important" +index);
  //  kill.style.color = 'yellow';
  let kill = document.getElementById(index);
  kill.style.backgroundColor = 'yellow';
  let notes = localStorage.getItem("noteso");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let notesobj = notesObj[index];
  notesobj = notesobj.kill;

  localStorage.setItem("noteso", JSON.stringify(notesObj));
  // showNotes();
}