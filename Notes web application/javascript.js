console.log("Welcome Akky in your new chalange :-");


show_notes(); // to show all notes on every refersh page

// ===================== Storing note array from textarea to localstorage =========================================

let addnote_btn = document.getElementById("addnote_btn");

addnote_btn.addEventListener("click", function (e) {

    let note_text = document.getElementById("note_text");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteobj = [];
    }
    else {

        noteobj = JSON.parse(notes);
    }

    noteobj.push(note_text.value);
    localStorage.setItem("notes", JSON.stringify(noteobj));

    note_text.value = "";
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
      <h5 class="card-title">Note : ${index + 1}</h5>
      <p class="card-text"> ${element} </p>
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
// let search_btn = document.getElementById("search_btn")


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



