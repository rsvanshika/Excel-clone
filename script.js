const theadRow = document.getElementById("table-heading-row");
const tBody = document.getElementById("table-body");
let currentCell;
// font styling button
const boldbutton =document.getElementById("bold-btn");
const italicsbutton=document.getElementById("italics-btn");
const underlinebutton=document.getElementById("underline-btn")

const leftAlignButton=document.getElementById("left-align");
const rightAlignButton=document.getElementById("right-align");
const centerAlignButton=document.getElementById("center-align");

const fontSize=document.getElementById("font-size");
const fontFamily=document.getElementById("font-family")

const cutButton=document.getElementById("cut-btn");
const copyButton=document.getElementById("copy-btn");
const pasteButton =document.getElementById("paste-btn")

const textColor=document.getElementById("text-color");
const bgColor=document.getElementById("bg-color");

// for adding heading in excel sheet;
for (let col = 65; col <= 90; col++) {
  let th = document.createElement("th");
  th.innerText = String.fromCharCode(col);
  theadRow.append(th);
}

for (let row = 1; row <= 100; row++) {
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  th.innerText = row;
  tr.appendChild(th);
 
  // looping from A to Z;
  for (let col = 1; col <= 26; col++) {
    let td = document.createElement("td");
    td.setAttribute("contenteditable", "true");
    // colRow -> A1, B1, C1, D1,
    td.setAttribute("id", `${String.fromCharCode(col + 64)}${row}`);
    td.addEventListener("focus", (event) => onFocusFunction(event));
    tr.appendChild(td);
  }
  tBody.appendChild(tr);
}
 //bold button
 boldbutton.addEventListener("click",()=>{
    if(currentCell.style.fontweight=="bold"){
        currentCell.style.fontweight="normal";
    }
    else
    currentCell.style.fontweight="bold";
  })
   //italics button
   italicsbutton.addEventListener("click",()=>{
    if(currentCell.style.fontStyle=="italic"){
        currentCell.style.fontStyle="normal";
    }
    else
    currentCell.style.fontStyle="italic";
  })


  //leftAlign
  leftAlignButton.addEventListener("click",()=>{
    currentCell.style.textAlign="left";
  })
  //righttAlign
  rightAlignButton.addEventListener("click",()=>{
    currentCell.style.textAlign="right";
  })
  //centerAlign
  centerAlignButton.addEventListener("click",()=>{
    currentCell.style.textAlign="center";
  })


  //font-size
  //the fontsize in right referencing my dropdown
  //the fontsize in right referencing my current 
  
  fontSize.addEventListener("change",()=>{
    currentCell.style.fontSize= fontSize.value;

  });


  //font-family
  fontFamily.addEventListener("change",()=>{
    currentCell.style.fontFamily= fontFamily.value;

  });

  //cut Button
  cutButton.addEventListener("click",()=>{
    cutValue={
        style:currentCell.style.cssText,
        text:currentCell.innerText,

    };
    currentCell.style=null;
    currentCell.innerText="";

  });
  //paste button
  pasteButton.addEventListener("click",()=>{
    if(cutValue.style || cutValue.text)
    {
        currentCell.style=cutValue.style ;
        currentCell.innerText=cutValue.text;
    }
  
 });
  //copy button
  copyButton.addEventListener("click",()=>{
    cutValue={
        style:currentCell.style.cssText,
        text:currentCell.innerText,
     };
   
 });

 //textColor
 textColor.addEventListener("change",()=>{
    currentCell.style.color=textColor.value;

 })



 //bgcolor
 bgColor.addEventListener("change",()=>{
    currentCell.style.backgroundColor=bgColor.value;
 })
function onFocusFunction(event) {
  currentCell = event.target;
  console.log(currentCell);
  document.getElementById("current-cell").innerText = currentCell.id;
}

