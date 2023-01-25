var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
var phoneError=document.getElementById("phone-error");
var timeError=document.getElementById("time-error");
var messageError=document.getElementById("message-error");

function username(){
    var name=document.getElementById("name").value;
    if(name.length==0){
        nameError.innerHTML="Name is required"
        return false;
    }
    if(!name.match(/^[A-Za-z]*$/)){
        nameError.innerHTML="Write full name"
        return false;

    }
    nameError.innerHTML='Valid <i class="fa-regular fa-circle-check fa-1x"></i>';
    return true;
}

function emailid(){
    var email=document.getElementById("email").value;
    if(email.length==0){
        emailError.innerHTML='Email is required';
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid'

    return false;
    }
    emailError.innerHTML='Valid<i class="fa-regular fa-circle-check fa-1x"></i>'
    return true;
}


function phonenum(){
    var phone=document.getElementById("phone").value;
    if(phone.length == 0){
        phoneError.innerHTML='Phone no is required'
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML='Phone no should be 10 digits!'
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits please'
        return false;

    }
    phoneError.innerHTML='Valid<i class="fa-regular fa-circle-check fa-1x"></i>';
    return true;

}
function ValidateAdvancedTime(){
    var time = document.getElementById("timetocontact").value;
    if(time.length == 0){
        timeError.innerHTML = 'Time is required'
        return false;
    }
    if(time.length > 0){
        timeError.innerHTML = 'Valid<i class="fa-regular fa-circle-check fa-1x"></i>'
        return true;
    }
}

function entermessage(){
    var message=document.getElementById("textarea").value;
    var required =30;
    var left = required -message.length;
    if(left >0){
        messageError.innerHTML=left + 'More character required';
        return false;

    }
    messageError.innerHTML='Valid<i class="fa-regular fa-circle-check fa-1x"></i>';
    return true;


}


function validateform(){
    if(!username() || !emailid() || !phonenum() || !entermessage() ||!ValidateAdvancedTime()){
        submitError.style.display ='block';
        submitError.innerHTML ='please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none' ;} ,1000);
        return false;
    }
}

