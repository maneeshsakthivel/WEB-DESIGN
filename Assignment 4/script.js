
var checkboxes = document.getElementsByClassName("howHear");
var selectCheckboxOptions = ['Large', 'Small', 'Extra Small', 'Extra Large', 'Medium'];

function finalCheck(){
    var isChked = isChecked();
    if (isChked){
        return true;
    }
    else{
        return false;
    }
}

function validateFields(obj,errorDivId,type){
    var regexName=/^[a-zA-Z]+$/;
    var regexEmail=/([\w.]+)@([\w\.]+)\.(\w+)/;
    var regexPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regexZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/;
    var errorDiv = document.getElementById(errorDivId);
    
    if (type == "name"){
        if (!obj.value.trim().match(regexName)){
            
            showErrorMsg(errorDiv, obj);
        }
        else{
            clearErrorMsg(errorDiv, obj);
        }
    }

    if (type == "email"){
        if (!obj.value.trim().match(regexEmail)){
            showErrorMsg(errorDiv, obj)
        }
        else{
            clearErrorMsg(errorDiv, obj);
        }
    }

    if (type == "phone"){
        if (!obj.value.trim().match(regexPhone)){
            showErrorMsg(errorDiv, obj)
        }
        else{
            clearErrorMsg(errorDiv, obj)
        }
    }

    if (type == "zipcode"){
        if (!obj.value.trim().match(regexZipCode)){
            showErrorMsg(errorDiv, obj)
        }
        else{
            clearErrorMsg(errorDiv, obj)
        }
    }
}

function showErrorMsg(divError, textField){
    if (textField){
        textField.style.border = "2px solid red";
        textField.value = "";
    }
    divError.style.display = "block";
    divError.style.border = "";
    divError.style.color = "red";
}

function clearErrorMsg(divError, textField){
    divError.style.display = "none";
    divError.style.color = "red";
    if (textField){
        textField.style.border = "";
    }
}

function isChecked(){
    var errorDiv = document.getElementById("errorSource");
    for (ele of checkboxes){
        if (ele.checked){
            clearErrorMsg(errorDiv, null);
            return true;
        } 
    }
    showErrorMsg(errorDiv, null);
    return false;
}

function drinkslistChange(obj){
    
    if (document.getElementsByClassName("chkbox").length >= 1){
        var changingLabel = document.getElementById("labelTochange");
        var chkboxChange = document.getElementById("chkboxChange");
        changingLabel.innerHTML  = selectCheckboxOptions[obj.selectedIndex];
        chkboxChange.setAttribute("value", selectCheckboxOptions[obj.selectedIndex]);

    }
    else{
        var formDiv = document.getElementById("form_elements");
        console.log(obj);
        var chkbox = document.createElement('input')
        chkbox.className = "chkbox"
        chkbox.id = "chkboxChange"
        chkbox.setAttribute('type', 'checkbox');
        chkbox.setAttribute('name', 'CheckboxValue');
        chkbox.setAttribute("onclick", addTextField());
        chkbox.addEventListener( 'change', function() {
            if(this.checked) {
                // Checkbox is checked..

                //Add TextBox label
                if (document.getElementsByClassName("dynamicTextFeild").length > 1){
                    var removeTextFields = document.getElementsByClassName("dynamicTextFeild");
                    for (obj of removeTextFields){
                        obj.style.display = "block";
                    }
                    
                }
                else{
                    var labelTf = document.createElement("label")
                    labelTf.innerHTML = "Value*:";
                    labelTf.className = "dynamicTextFeild";
                    labelTf.setAttribute("for", "dynamicTF");


                    var formDiv = document.getElementById("form_elements");
                    var textFeild = document.createElement("input");
                    textFeild.required = true;
                    textFeild.className = "dynamicTextFeild";
                    textFeild.id = "dynamicTF";
                    textFeild.name = "dynamicTF";
                    textFeild.setAttribute("type", "text");
                    
                    formDiv.appendChild(labelTf);
                    formDiv.appendChild(textFeild);
                }
                

            } else {
                var removeTextFields = document.getElementsByClassName("dynamicTextFeild");
                for (obj of removeTextFields){
                    obj.style.display = "none";
                }
                var dynamicTextF = document.getElementById("dynamicTF");
                dynamicTextF.required = false;
            }
        });
        chkbox.style.float = "left";
        formDiv.appendChild(chkbox);
        var labl = document.createElement("label");
        labl.name = "checkBoxLabel";
        labl.innerHTML = selectCheckboxOptions[obj.selectedIndex];
        chkbox.setAttribute("value", selectCheckboxOptions[obj.selectedIndex]);
        formDiv.appendChild(labl);
        labl.setAttribute("id", "labelTochange")
        formDiv.appendChild(document.createElement("br"));
        formDiv.appendChild(document.createElement("br")); 
        
    }
}

function addTextField(obj){
    if (obj){
        var formDiv = document.getElementById("form_elements");
        var textFeild = document.createElement("input");
        textFeild.setAttribute("type", "text");
        formDiv.appendChild(textFeild);
    }
    
}
