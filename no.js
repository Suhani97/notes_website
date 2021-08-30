console.log("welcome");
let adbtn=document.getElementById("addbtn");
adbtn.addEventListener("click",function(e){
    let adtxt=document.getElementById("addtext");
    let notes=localStorage.getItem("note");
   // let time=localStorage.getItem("time");
    let tod=new Date();
    let adtit=document.getElementById("addtit");
    //let tit=localStorage.getItem("tit");
   // let titobj;
    console.log(tod);
    console.log(typeof(tod));
    
    JSON.stringify(tod) ;
    let a="abd";
    // console.log(typeof(a));
    // console.log(typeof(tod));
    let noteobj;
   // let timeobj;
    
    if(notes==null)
    {
         noteobj=[];
         // timeobj=[];
          //titobj=[];
    }
    else
    {
        noteobj=JSON.parse(notes);
        //timeobj=JSON.parse(time);
        //titobj=JSON.parse(tit);
    }
    let myobj={
        title:adtit.value,
        text:adtxt.value,
        time:tod

    }
    // console.log(tit);
    // console.log(adtit.value);
    noteobj.push(myobj);
    // timeobj.push(tod);
    // titobj.push(adtit.value);
    // console.log(timeobj);
    localStorage.setItem("note",JSON.stringify(noteobj));
   // localStorage.setItem("tit",JSON.stringify(titobj));
  // localStorage.setItem("time",JSON.stringify(timeobj));
   
    adtxt.value="";
    addtit.value="";
    console.log(noteobj);
    
    shownotes();
})
function shownotes()
{
    let notes=localStorage.getItem("note");
   // let time=localStorage.getItem("time");
    //let tit=localStorage.getItem("tit");
    // let titobj;
    // let timeobj;
    let noteobj;
    if(notes==null)
    {
        noteobj=[];
        // timeobj=[];
        // titobj=[];
    }
    else
    {noteobj=JSON.parse(notes);
    //  timeobj=JSON.parse(time);
    //  titobj=JSON.parse(tit);
    }
    let html="";

    {noteobj.forEach(function(element,index){
        html+=` <div class="card note cardnode my-2 mx-2" style="width: 18rem;">
            
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <p>${element.time}</p>
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
}
shownotes();
function deletenote(index)
{
    console.log(`Im deleting ${index}`);
    let notes=localStorage.getItem("note");
    // let time=localStorage.getItem("time");
    // let tit=localStorage.getItem("tit");
    // let titobj;
    let noteobj;
    // let timeobj;
    if(notes==null)
    {
        noteobj=[];
        // timeobj=[];
        // titobj=[];
    }
    else
    {noteobj=JSON.parse(notes);
    //  timeobj=JSON.parse(time);
    //  titobj=JSON.parse(tit);
    }
    noteobj.splice(index,1);
    //  timeobj.splice(index,1);
    //  titobj.splice(index,1);
    // localStorage.setItem("tit",JSON.stringify(titobj));
    localStorage.setItem("note",JSON.stringify(noteobj));
     //localStorage.setItem("time",JSON.stringify(timeobj));

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
