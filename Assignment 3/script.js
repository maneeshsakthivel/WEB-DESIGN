//Title constructor function that creates a Title object
var submitButton = document.getElementById("button");
var addNewRowButon = document.getElementById("add");
var table = document.getElementById("myTable");
var checkedRowsCount = 0;
function onLoadCustom() {
    var tr = document.getElementsByClassName("dropDownTextArea");
    console.log(tr)
    for (drop of tr) {
        drop.style.display = "none";
    }
    // Submit button greyed out
    disabelButton()
}

function disabelButton() {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "Grey"
    submitButton.style.border = "none";
}

function enableButton(){
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "Orange"
    submitButton.style.border = "thick solid Orange"
}
function Title(t1) {
    this.mytitle = t1;
}

Title.prototype.getName = function () {
    return (this.mytitle);
}

var socialMedia = {
    facebook: 'http://facebook.com',
    twitter: 'http://twitter.com',
    flickr: 'http://flickr.com',
    youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function addNewStudent() {
    let row = document.createElement('TR');

    for (let i = 1; i <= 9; i++) { 
        let cell = document.createElement('Cell');
        let col = document.createElement('TD');
        let randomNumber = Math.floor(Math.random() * 10);

        if (i == 1) {
            let checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.setAttribute("onchange", "checkBoxChange(this)");
            cell.appendChild(checkBox);
            cell.appendChild(document.createElement("br"));
            cell.appendChild(document.createElement("br"));
            let image = document.createElement("img");
            image.setAttribute("src", "down.png");
            image.setAttribute("width", "25px");
            image.setAttribute("onclick", "expand(this)");
            cell.appendChild(image);
        }
        else if (i == 2) {
            cell.innerHTML = "Student " + randomNumber;
        }
        else if (i == 3) {
            cell.innerHTML = "Teacher " + randomNumber;
        }
        else if (i == 4) {
            cell.innerHTML = "Approved";
        }
        else if (i == 5) {
            cell.innerHTML = "Fall";
        }
        else if (i == 6) {
            cell.innerHTML = "TA";
        }
        else if (i == 7) {
            cell.innerHTML = Math.floor(Math.random() * 10000);
        }
        else if (i == 8) {
            cell.innerHTML = Math.floor(Math.random() * 100) + "%";
        }
        col.appendChild(cell);
        row.appendChild(col);

    }
    table.appendChild(row);

    //Adding dropdown row
    let advisorRow = document.createElement('TR');
    advisorRow.setAttribute("class", "dropDownTextArea");
    let advisorDetails = document.createElement("TD");
    advisorRow.setAttribute("colspan", "8")
    advisorDetails.innerText = "Adivsor" + "\n\n " +
     "Award  Details \n" +
      "Summer 1-2014(TA) \n" + 
      "Budget Number: \n" + 
      "Tuition Number: \n" + 
      "Comments: \n\n\n" + 
      "Award Status:\n\n";
    advisorRow.appendChild(advisorDetails);
    table.appendChild(advisorRow);
}



function checkBoxChange(obj) {
    var row = obj.parentNode.parentElement;
    if (row.tagName != "TR"){
      row = obj.parentNode.parentElement.parentElement;
    }
    if(obj.checked){
      row.style.backgroundColor = "orange";
      checkedRowsCount ++;
      enableButton();
      //Add delete button
      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("onclick", "deleteRow(this)");
      row.lastElementChild.append(deleteButton);
      deleteButton.style.height = "20px"
      deleteButton.style.width = "60px"
      deleteButton.textContent = "Delete";
    }
    else{
      
      checkedRowsCount = checkedRowsCount - 1;
      row.style.backgroundColor = "white";
      //Remove delete button for the row

      if (row.lastElementChild.childElementCount == 2){
        row.lastElementChild.lastElementChild.remove();
      }

      row.lastElementChild.firstElementChild.remove();
      
      //Disable submit button of nothing is selected
      if (checkedRowsCount == 0){
        disabelButton();
      }
    }
}

function deleteRow(obj){
    var row = obj.parentNode.parentElement;
    if (row.tagName != "TR"){
      row = obj.parentNode.parentElement.parentElement;
    }
    row.nextElementSibling.remove();
    row.remove();

    //Remove associated detail row



    // Updating checkedrows counter and check for disabling button
    checkedRowsCount = checkedRowsCount - 1;
    if (checkedRowsCount == 0){
      disabelButton();
    }


}

function expand(obj){
  var detailsRow = obj.parentNode.parentNode.nextElementSibling;

  if (detailsRow.tagName == "TD"){
    detailsRow = obj.parentNode.parentElement.parentElement.nextElementSibling;
  }
  if  (detailsRow.style.display == "none" || detailsRow.style.display == ""){
    detailsRow.style.display = "block";
  }
  else{
    detailsRow.style.display = "none";
  }
}


