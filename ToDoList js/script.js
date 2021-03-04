function loadJson(button){
    //Getting data from local JOSN file
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json');
    //Callback function when data is loaded.
    xhr.addEventListener("load", (evt) => {
        var downloadedData = JSON.parse(evt.target.responseText);
        console.log(downloadedData);
        loadtable(downloadedData);
        loadButton = document.getElementById("loadmore");
        loadButton.disabled = true;
        loadButton.backgroundColor = "#e7e7e7";
        loadButton.style.border = "0px";
        loadButton.style.backgroundColor = "#e7e7e7";
        // this. = true;
    });
    xhr.send();

    //use the data to load 
}
let rowCounter = 1;
function loadtable(jsonData){
    var table = document.getElementById("table");

    //create tr
    var tr = document.createElement("tr");
    
    var td_1 = document.createElement("td");
    jsonData.forEach(task => {

        //add new row and assign id to it
        row_obj = document.createElement('tr');
        row_obj.id = ""+rowCounter;

        // add first column with icon inside and append to row
        col_obj = document.createElement('td');
        iconTask = document.createElement('img')
        iconTask.id = "iconTask" + rowCounter;
        iconTask.src = "icons/task.png";
        //col_obj.appendChild(iconTask);
        row_obj.appendChild(col_obj);

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "id";
        checkbox.addEventListener('change', function() {
            if (this.checked) {
              console.log("Checkbox is checked..");
              this.disabled = true;
            } else {
              console.log("Checkbox is not checked..");
            }
          });
        var label = document.createElement('label')
        label.htmlFor = "id";
        label.appendChild(document.createTextNode('text for label after checkbox'));

        // container.appendChild(checkbox);
        // container.appendChild(label);
        col_obj.appendChild(checkbox);



        //add second column with title and other details and append to row
        col_obj = document.createElement('td');
        //title for the task
        innerDiv = document.createElement('div');
        innerDiv.innerHTML = task.Title;
        innerDiv.id = "title" + rowCounter;
        col_obj.appendChild(innerDiv);
        //description for the task
        divDescription = document.createElement('div');
        divDescription.id = "divDesc" + rowCounter;
        console.log(divDescription.id);
        divDescription.innerHTML = "<br><i>Description:</i> " + task.Description + "<br><i>Due Date:</i> " + task.Due_Date + " &nbsp;&nbsp;&nbsp;&nbsp;<i>Time:</i> " + task.Time;
        divDescription.hidden = true;
        col_obj.appendChild(divDescription);
        //done button for the task
        btnDone = document.createElement('button');
        btnDone.innerHTML = "Mark as Done";
        btnDone.id = "btnDone" + rowCounter;
        //action to be taken when button is clicked
        btnDone.onclick = function(){
            iconTask = document.getElementById("iconTask"+this.parentElement.parentElement.id)
            // iconTask.src = "icons/done.png";
            this.hidden = true;
        }
        btnDone.hidden = true;
        //col_obj.appendChild(btnDone);
        row_obj.appendChild(col_obj);

        //add third column to add expand button and append to row
        col_obj = document.createElement('td');
        innerDiv = document.createElement("img");
        innerDiv.src="up.png";
        innerDiv.style.height = "10px";
        innerDiv.style.width = "10px";

        innerDiv.style.he
        //action to be taken when user clicks to see more
        innerDiv.onclick = function(){
            toggle(this);
            //this.src = "down.png";
        };
        col_obj.appendChild(innerDiv);
        row_obj.appendChild(col_obj);

        //append the row to teh table and increment the counter
        table.appendChild(row_obj);
        rowCounter++;
    });

    


}


function toggle(img){
    let index = img.parentElement.parentElement.id;
    let divDescription = document.getElementById("divDesc"+index);
    let btnDone, title;
    //check if the description is already shown
    if(divDescription.hidden == true) {
        title = document.getElementById("title"+index);
        //change the font weight for the title
        title.className = "bold";
        divDescription.hidden = false;
        // btnDone = document.getElementById("btnDone"+ index);
        // btnDone.hidden = false;
        img.src = "down.png";
    }else{
        //if open then hide the details
        divDescription.hidden = true;
        title = document.getElementById("title"+index);
        //change back the font weight
        title.className = "";
        // btnDone = document.getElementById("btnDone" + index);
        // btnDone.hidden = true;
        img.src = "up.png";
    }
}
var modal = document.getElementById("myModal");

function openPopUp(){

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    
    modal.style.display = "block";


}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

var table = document.getElementById("table");

function addNewRow(){
    var table = document.getElementById('table');
    let newRow, col, innerDiv, iconTask, divDescription, btnDone;
    
    //add new row and assign id to it
    row_obj = document.createElement('tr');
    row_obj.id = ""+rowCounter;

    // add first column with icon inside and append to row
    col_obj = document.createElement('td');
    iconTask = document.createElement('img')
    iconTask.id = "iconTask" + rowCounter;
    iconTask.src = "icons/task.png";
    //col_obj.appendChild(iconTask);
    row_obj.appendChild(col_obj);

    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";
    checkbox.addEventListener('change', function() {
        if (this.checked) {
          console.log("Checkbox is checked..");
          this.disabled = true;
        } else {
          console.log("Checkbox is not checked..");
        }
      });
    var label = document.createElement('label')
    label.htmlFor = "id";
    label.appendChild(document.createTextNode('text for label after checkbox'));

    // container.appendChild(checkbox);
    // container.appendChild(label);
    col_obj.appendChild(checkbox);

    //add second column with title and other details and append to row
    col_obj = document.createElement('td');
    //title for the task
    innerDiv = document.createElement('div');
    innerDiv.innerHTML = document.getElementById("title").value;
    innerDiv.id = "title" + rowCounter;
    col_obj.appendChild(innerDiv);
    //description for the task
    divDescription = document.createElement('div');
    divDescription.id = "divDesc" + rowCounter;
    console.log(divDescription.id);
    divDescription.innerHTML = "<br><i>Description:</i> " + document.getElementById("desc").value + "<br><i>Due Date and time:</i> " + document.getElementById("duedate").value;
    divDescription.hidden = true;
    col_obj.appendChild(divDescription);
    //done button for the task
    
    //action to be taken when button is clicked
    
    row_obj.appendChild(col_obj);


    ///add third column to add expand button and append to row
    col_obj = document.createElement('td');
    innerDiv = document.createElement("img");
    innerDiv.src="up.png";
    innerDiv.style.height = "10px";
    innerDiv.style.width = "10px";

    innerDiv.style.he
    //action to be taken when user clicks to see more
    innerDiv.onclick = function(){
        toggle(this);
        //this.src = "down.png";
    };
    col_obj.appendChild(innerDiv);
    row_obj.appendChild(col_obj);

    //append the row to teh table and increment the counter
    table.appendChild(row_obj);
    rowCounter++;
};