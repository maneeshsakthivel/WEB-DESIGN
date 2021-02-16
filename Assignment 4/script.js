
var checkboxes = document.getElementsByClassName("howHear");

function finalCheck(){
    return isChecked();
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
    textField.style.border = "2px solid red";
    textField.value = "";
    divError.style.display = "block";
    divError.style.border = ""
    divError.style.color = "red";
}

function clearErrorMsg(divError, textField){
    divError.style.display = "none";
    divError.style.color = "red";
    textField.style.border = ""
}

function isChecked(){
    for (ele in checkboxes){
        if (ele.isChecked) return true;
    }
    return false;
}

