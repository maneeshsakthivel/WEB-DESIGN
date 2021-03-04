
var checkboxes;

$( document ).ready( function ()
{
    console.log( "ready!" );


    //Validate firstName
    $( "#firstName" ).blur( function ()
    {
        validateFields( this, 'errorFirstName', 'name' );
    });

    //Validate lastName
    $( "#lastName" ).blur( function ()
    {
        validateFields(this,'errorLastName', 'name');
    });

    //Validate email
    $( "#emailId" ).blur( function ()
    {
        validateFields(this,'errorEmailId', 'email');
    });

    //Validate phone
    $( "#phoneNumber" ).blur( function ()
    {
        validateFields(this,'errorPhone', 'phone');
    });

    //Validate zipcode
    $( "#zipcode" ).blur( function ()
    {
        validateFields(this,'errorZipCode', 'zipcode')
    });

    $( "#comments" ).blur( function ()
    {
        validateFields(this,'errorComments', 'comments')
    });


    checkboxes = $(".howHear");

    checkboxes.each(
        function (index, element){
            $(element).click(
                function (){
                    isChecked();
                }
            )
        }
    );

    radioBoxes = $(".titleRadio");

    radioBoxes.each(
        function (index, element){
            $(element).click(
                function (){
                    checkRadioBoxes();
                }
            )
        }
    );




    //Submitbutton callback
    $('.submit').click(
        function() {

            //Checking radioboxes
            var isRadioSelected = checkRadioBoxes();
            if(!isRadioSelected){
                return false;
            }
            
            //Checking checboxes
            var isChked = isChecked();
            var returnFlag;
            if (!isChked){
                return false;
            }
            else{
                //validate firstName null
                if ($( "#firstName" ).val() == ""){
                    validateFields( $( "#firstName" ).get(0), 'errorFirstName', 'name' );
                    return false;
                }

                else if ($( "#lastName" ).val() == ""){
                    validateFields($( "#lastName").get(0),'errorLastName', 'name');
                    return false;
                }

                else if ($( "#emailId" ).val() == ""){
                    validateFields($( "#emailId" ).get(0),'errorEmailId', 'email');
                    return false;
                }

                else if ($( "#phoneNumber" ).val() == ""){
                    validateFields($( "#phoneNumber" ).get(0),'errorPhone', 'phone');
                    return false;
                }

                else if ($( "#zipcode" ).val() == ""){
                    validateFields($( "#zipcode" ).get(0),'errorZipCode', 'zipcode');
                    return false;
                }
                
                else if ($( "#comments" ).val() == ""){
                    validateFields($( "#comments" ).get(0),'errorComments', 'comments');
                    return false;
                }

            }
          return true
        }
    )
} );


function isChecked(){
    
    if (finalcheck()){
        return true;
    }
    else{
        return false;
    }
    
}

function finalcheck ()
{
    var errorDiv = $('#errorSource').get(0);
    for (ele of checkboxes){
        if (ele.checked){
            clearErrorMsg(errorDiv, null);
            return true;
        } 
    }
    showErrorMsg(errorDiv, null);
    return false;
}

function validateFields ( obj, errorDivId, type )
{
    var regexName = /^[a-zA-Z]+$/;
    var regexEmail = /([\w.]+)@([\w\.]+)\.(\w+)/;
    var regexPhone = /\d{3}-?\d{3}-\d{4}$/;
    var regexZipCode = /^[0-9]{5}(?:-[0-9]{4})?$/;
    var errorDiv = $("#" + errorDivId).get(0);

    if ( type == "name" )
    {
        if ( !obj.value.trim().match( regexName ) )
        {

            showErrorMsg( errorDiv, obj );
        }
        else
        {
            clearErrorMsg( errorDiv, obj );
        }
    }

    if ( type == "email" )
    {
        if ( !obj.value.trim().match( regexEmail ) )
        {
            showErrorMsg( errorDiv, obj )
        }
        else
        {
            clearErrorMsg( errorDiv, obj );
        }
    }

    if ( type == "phone" )
    {
        if ( !obj.value.trim().match( regexPhone ) )
        {
            showErrorMsg( errorDiv, obj )
        }
        else
        {
            clearErrorMsg( errorDiv, obj )
        }
    }

    if ( type == "zipcode" )
    {
        if ( !obj.value.trim().match( regexZipCode ) )
        {
            showErrorMsg( errorDiv, obj )
        }
        else
        {
            clearErrorMsg( errorDiv, obj )
        }
    }

    if ( type == "comments" ){
        if(obj.value == ""){
            showErrorMsg( errorDiv, obj );
        }
        else{
            clearErrorMsg( errorDiv, obj );
        }
    }
}

function showErrorMsg ( divError, textField )
{
    if ( textField )
    {
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

function checkRadioBoxes(){
    var radioList = $(".titleRadio");

    for(radio of radioList){
        if (radio.checked){
            clearErrorMsg($('#errorTitle').get(0), null);
            return true;
        }
    }
    showErrorMsg($('#errorTitle').get(0), null);
    return false;
}