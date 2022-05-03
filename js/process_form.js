var validate = false;

function validateData() {
  document.MCUForm.addEventListener("submit", submitForm);
  
  document.MCUForm.first_Name.addEventListener("focus", firstNameFocus);
  document.MCUForm.first_Name.addEventListener("blur", firstNameBlur);

  document.MCUForm.last_Name.addEventListener("focus", lastNameFocus);
  document.MCUForm.last_Name.addEventListener("blur", lastNameBlur);

  document.MCUForm.email_Address.addEventListener("focus", emailAddressFocus);
  document.MCUForm.email_Address.addEventListener("blur", emailAddressBlur);
  
  document.MCUForm.phone_Number.addEventListener("focus", phoneNumberFocus);
  document.MCUForm.phone_Number.addEventListener("blur", phoneNumberBlur);

  document.MCUForm.web_Address.addEventListener("focus", webAddressFocus);
  document.MCUForm.web_Address.addEventListener("blur", webAddressBlur);
}




function firstNameFocus() {
  var first = document.getElementById('first');
  var span = first.getElementsByTagName('span');
  span[0].firstChild.nodeValue = "Please enter your first name!";
}
function firstNameBlur() {
  var first = document.getElementById('first');
  var nameRegex = /^[a-zA-Z]+$/;
  var span = first.getElementsByTagName('span');
  var firstName = document.MCUForm.first_Name.value;
  if (firstName.match(nameRegex) != undefined) {
    if(span[0].firstChild.nodeValue === undefined) {
        span[0].appendChild(document.createTextNode(''));
    }else{
        span[0].firstChild.nodeValue = "";
        validate = true;
        }
  } else {
    if(span[0].firstChild.nodeValue == undefined) {
            span[0].appendChild(document.createTextNode('You did not enter a valid name'));
        } else {
            span[0].firstChild.nodeValue = "You did not enter a valid name";
            validate = false;
          }
  }
}

function lastNameFocus() {
    var last = document.getElementById('last');
    var span = last.getElementsByTagName('span');
    span[0].firstChild.nodeValue = "Please enter your last name!";
}
function lastNameBlur() {
  var last = document.getElementById('last');
  var nameRegex = /^[a-zA-Z]+$/;
  var span = last.getElementsByTagName('span');
  var lastName = document.MCUForm.last_Name.value;
  if (lastName.match(nameRegex) != undefined) {
    if(span[0].firstChild.nodeValue === undefined) {
        span[0].appendChild(document.createTextNode(''));
    }else{
        span[0].firstChild.nodeValue = "";
        validate = true;
        }
  } else {
    if(span[0].firstChild.nodeValue == undefined) {
            span[0].appendChild(document.createTextNode('You did not enter a valid name'));
        } else {
            span[0].firstChild.nodeValue = "You did not enter a valid name";
            validate = false;
        }
  }
}
function emailAddressFocus() {
    var email = document.getElementById('email');
    var span = email.getElementsByTagName('span');
    span[0].firstChild.nodeValue = "Please enter your email!";
}
function emailAddressBlur() {
  var email = document.getElementById('email');
  var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var span = email.getElementsByTagName('span');
  var emailAddress = document.MCUForm.email_Address.value;
  if (emailAddress.match(emailRegex) != undefined) {
    if(span[0].firstChild.nodeValue === undefined) {
        span[0].appendChild(document.createTextNode(''));
    }else{
        span[0].firstChild.nodeValue = "";
        validate = true;
        }
  } else {
    if(span[0].firstChild.nodeValue == undefined) {
            span[0].appendChild(document.createTextNode('You did not enter a valid email'));
        } else {
            span[0].firstChild.nodeValue = "You did not enter a valid email";
            validate = false;
        }
  }
}
function phoneNumberFocus() {
    var phone = document.getElementById('phone');
    var span = phone.getElementsByTagName('span');
    span[0].firstChild.nodeValue = "Please enter your phone number!";
}
function phoneNumberBlur() {
  var phone = document.getElementById('phone');
  var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var span = phone.getElementsByTagName('span');
  var phoneNumber = document.MCUForm.phone_Number.value;
  if (phoneNumber.match(phoneRegex) != undefined) {
    if(span[0].firstChild.nodeValue === undefined) {
        span[0].appendChild(document.createTextNode(''));
    }else{
        span[0].firstChild.nodeValue = "";
        validate = true;
        }
  } else {
    if(span[0].firstChild.nodeValue == undefined) {
            span[0].appendChild(document.createTextNode('You did not enter a valid phone number'));
        } else {
            span[0].firstChild.nodeValue = "You did not enter a valid phone number";
            validate = false;
        }
  }
}
function webAddressFocus() {
    var url = document.getElementById('url');
    var span = url.getElementsByTagName('span');
    span[0].firstChild.nodeValue = "Please enter your student address!";
}
function webAddressBlur() {
  var url = document.getElementById('url');
  var urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9.~]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9.~]*)/gm;
  var span = url.getElementsByTagName('span');
  var webAddress = document.MCUForm.web_Address.value;
  if (webAddress.match(urlRegex) != undefined) {
    if(span[0].firstChild.nodeValue === undefined) {
        span[0].appendChild(document.createTextNode(''));
    }else{
        span[0].firstChild.nodeValue = "";
        validate = true;
        }
  } else {
    if(span[0].firstChild.nodeValue == undefined) {
            span[0].appendChild(document.createTextNode('You did not enter a valid student url'));
        } else {
            span[0].firstChild.nodeValue = "You did not enter a valid student url";
            validate = false;
        }
  }
}




function submitForm(form) {
  form.preventDefault();

  var badge=document.getElementById('badge');
  var span = badge.getElementsByTagName('span');

  if (validate == false) {
    if(span[0].firstChild.nodeName == undefined) {
      span[0].appendChild(document.createTextNode('You did not Complete the survey'));
    } else {
        span[0].firstChild.nodeValue = "You did not Complete the survey";
    } 
  } else if(validate==true) {
    var image=document.createElement('img');
    var survey = document.MCUForm.elements["survey_one","survey_two"];
    var captainAmerica=document.getElementById('CaptainAmerica');
    var ironMan=document.getElementById('IronMan');
    for (var x = 0; x < survey.length; x++) {
      if (captainAmerica.checked) {
        image.setAttribute('src','img/ca.png');
        image.style.width="30%"
        badge.appendChild(image);
        var text=document.createElement('h2');
          var capNode=document.createTextNode('You Are Captain America');
          text.appendChild(capNode);
          badge.appendChild(text);
          var input=document.createElement('h4');
          var inputNode=document.createTextNode(
            " Your First name is: \n" +
              document.MCUForm.elements["first_Name"].value +
              " Your Last name is: \n" +
              document.MCUForm.elements["last_Name"].value +
            " email is: " +
              document.MCUForm.elements["email_Address"].value +
              " phone number is: \n" +
              document.MCUForm.elements["phone_Number"].value +
              " and student address is: \n" +
              document.MCUForm.elements["web_Address"].value
          );

          input.appendChild(inputNode);
          badge.append(input)
        }else if(ironMan.checked){
          image.setAttribute('src','img/im.png');
          image.style.width="30%"
          badge.appendChild(image);
          var text=document.createElement('h2');
          var ironManNode=document.createTextNode('You Are Iron Man');
          text.appendChild(ironManNode)
          badge.appendChild(text)
          var input=document.createElement('h4');
          var inputNode=document.createTextNode(
            "Your First name is: " +
              document.MCUForm.elements["first_Name"].value +
              "Your Last name is: " +
              document.MCUForm.elements["last_Name"].value +
            "Email is: " +
              document.MCUForm.elements["email_Address"].value +
              "Phone Number is: " +
              document.MCUForm.elements["phone_Number"].value +
              " and Student Address is: " +
              document.MCUForm.elements["web_Address"].value
          );

          input.appendChild(inputNode);
          badge.append(input)
        }else{
          badge.appendChild(image);

          if(span[0].firstChild.nodeName == undefined) {
            span[0].appendChild(document.createTextNode('buttons are not checked'));
          } else {
              span[0].firstChild.nodeValue = "buttons are not checked";
          } 
        }
  
    }

   
  }

  return false;
}
window.addEventListener("load", validateData);

