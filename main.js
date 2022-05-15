var task = [];

function NewNote(newNoteArr) {
  for (let i = 0; i < newNoteArr.length; i++) {
    const noteContainer = document.getElementsByClassName("noteContainer")[0];
    const dateAndTime = document.createElement("div");
  }
}

function addNewNote() {
  inputValue1 = document.querySelector("#task").value;
  inputValue2 = document.querySelector("#date").value;
  inputValue3 = document.querySelector("#time").value;

  const noteDetails = {
    task: inputValue1,
    date: inputValue2,
    time: inputValue3,
  };
}

function onWindowLoad() {
  const submit = document.querySelector("#submit");
  form.onclick = NewNote;
}

window.onload = onWindowLoad;
