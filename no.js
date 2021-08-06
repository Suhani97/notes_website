console.log("welcome");
let adbtn=document.getElementById("addbtn");
adbtn.addEventListener("click",function(e){
    let adtxt=document.getElementById("addtext");
    let notes=localStorage.getItem("note");
    let noteobj;
    if(notes==null)
    {
         noteobj=[];

    }
    else
    noteobj=JSON.parse(notes);
    noteobj.push(adtxt.value);
    localStorage.setItem("note",JSON.stringify(noteobj));
    adtxt.value="";
    console.log(noteobj);
    shownotes();
})
function shownotes()
{
    let notes=localStorage.getItem("note");
    let noteobj;
    if(notes==null)
    {
        noteobj=[];
    }
    else
    noteobj=JSON.parse(notes);
    let html="";
    noteobj.forEach(function(element,index){
        html+=` <div class="card note cardnode my-2 mx-2" style="width: 18rem;">
            
        <div class="card-body">
          <h5 class="card-title">Notes${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Node</a>
        </div>
      </div>`;
    });
    let noteselm=document.getElementById("notes");
    if(noteobj.length!=0)
    {
        noteselm.innerHTML=html;
    }
    else
    noteselm.innerHTML=`Nothing to show! Use "add note" to add your notes`;

}
shownotes();
function deletenote(index)
{
    console.log(`Im deleting ${index}`);
    let notes=localStorage.getItem("note");
    let noteobj;
    if(notes==null)
    {
        noteobj=[];
    }
    else
    noteobj=JSON.parse(notes);
    noteobj.splice(index,1);
    localStorage.setItem("note",JSON.stringify(noteobj));
    shownotes();

}
let sh=document.getElementById('searchtxt');
sh.addEventListener("input",function(){
    let inpval=sh.value.toLowerCase();
    // console.log('input val',inpval);
    let notecard=document.getElementsByClassName('cardnode');
    
    Array.from(notecard).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inpval))
{
    element.style.display = "block";

}
else
{
    element.style.display = "none";

}
    })
})
