
show_notes(); // to show all notes on every refersh page

// ===================== Storing note array from textarea to localstorage =========================================

let addnote_btn = document.getElementById("addnote_btn");
addnote_btn.addEventListener("click", function (e) {
    let note_text = document.getElementById("note_text");
    let note_title =  document.getElementById("note_title"); 
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteobj = [];
    }
    else {

        noteobj = JSON.parse(notes);
    }

    let note_obj={
        title : note_title.value,
        text : note_text.value,
   }

    noteobj.push(note_obj);
    localStorage.setItem("notes", JSON.stringify(noteobj));

    note_text.value = "";
    note_title.value = "";
    console.log(noteobj);
    show_notes(); // to show notes after storing into localstorage
});

// ===================== Show All Notes Function =========================================

function show_notes() {
    let note_element = document.getElementById("note_element");
    let html = "";
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {

        noteobj = JSON.parse(notes);
    }

    Array.from(noteobj).forEach(function (element, index) {

        html += ` <div class="card note_card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">>N${index}- ${element.title}</h5>
      <p class="card-text"> ${element.text} </p>
      <button id= "${index}"  type="submit" class="btn btn-primary del_node" onclick="delete_notes(${index})" >Delete Note</button>
    </div>
  </div> 
  `
    });

    if (noteobj.lenght != 0) {
        note_element.innerHTML = html;
    }
    else {
        note_element.innerHTML = "Nothing to show"
    }
}


// ===================== Delete for Notes Function =========================================

function delete_notes(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {

        noteobj = JSON.parse(notes);
    }

    noteobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    show_notes();
}


// ===================== Search for Notes Function =========================================

let search = document.getElementById("search_text")
search.addEventListener("input", function () {
    let search_text = search.value;
    let note_card = document.getElementsByClassName("note_card");

    Array.from(note_card).forEach(element => {
        let note_text = element.getElementsByTagName("p")[0].innerText;
        let note_element = document.getElementById("note_element");

        if (note_text.includes(search_text)) {

            element.style.display = "block";

        }

        //  else if (!note_text.includes(search_text)) {

        //      note_element.innerHTML="Not found !"
        //  } 

        else {
            element.style.display = "none";

        }

    });

});



