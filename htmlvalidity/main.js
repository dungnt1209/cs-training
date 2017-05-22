"use strict";
var name = document.forms["form"]["name"];
function validateForm() {
    if(required(name)) {
        console.log("name OKE");
    } else {
        console.log("name NOT OKE");
    }
    return false;
}
function required(element) {
    var value = element.value;
    if((value == 'undefined') || (value == '')) {
        return false;
    } else {
        return true;
    }
}
