"use strict";
var form = document.forms["form"];
var name = form.name;
var email = form.email;
var website = form.website;
function validateForm() {
    if(required(form.name)) {
        console.log("name OKE");
    } else {
        console.log("name NOT OKE");
    }
    return false;
}
function required(element) {
    var value = element.value;
    if((value == undefined) || (value == '') || (value == null)) {
        return false;
    } else {
        return true;
    }
}
