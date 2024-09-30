

let createBtn = document.getElementById('createBtn');
let notesMain = document.getElementById('notesMain');


let noteHistory =()=>{

    let Notes = localStorage.getItem("Notes");
    let getNote = JSON.parse(Notes);

    if(getNote!=null){

    getNote.forEach((content)=>{

        let noteBox = document.createElement('div');
        noteBox.className = 'col-md-4 note-box';

    noteBox.innerHTML = `<div>
                    <i class="fa-solid fa-xmark"></i>
                    <textarea class="noteItems">${content}</textarea>
                </div>`;
    
    notesMain.appendChild(noteBox); 

});
}

};

noteHistory();


createBtn.addEventListener("click",()=>{

    let noteBox = document.createElement('div');

    noteBox.className = 'col-md-4 note-box';

    noteBox.innerHTML = `<div>
                    <i class="fa-solid fa-xmark"></i>
                    <textarea class="noteItems"></textarea>
                </div>`;
    
    notesMain.appendChild(noteBox); 

});


let storeData =()=>{

    let noteItems = document.querySelectorAll('.noteItems');

    noteArrey = [];
    noteItems.forEach((item)=>{
        
        noteArrey.push(item.value);
        console.log(noteArrey);

        });

    localStorage.setItem("Notes",JSON.stringify(noteArrey));
};


notesMain.addEventListener("click",(e)=>e.target.tagName=='I'?(e.target.offsetParent.parentElement.remove(),storeData()):0);

notesMain.addEventListener("input",(e)=>e.target.tagName=='TEXTAREA'?storeData():0);
    








