"use strict";
var form = document.forms["form"];
var name = form.name;
var msgName = document.querySelector(".msgName");
var email = form.email;
var msgEmail = document.querySelector(".msgEmail");
var website = form.website;
var msgWebsite = document.querySelector(".msgWebsite");
var phone = form.phone;
var msgPhone = document.querySelector(".msgPhone");
var file = form.file;
var msgFile = document.querySelector(".msgFile");

function onlyName(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 122)) {
        return true;
    }
    return false;
}
function onlyNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function onlyFile() {
    for (var i = 0; i < file.files.length; i++) {
        if(file.files[i].size > 1024000) {
            file.className = "error";
            msgFile.innerHTML = "Bạn chỉ được upload file có dung lượng dưới 1MB"
        } else {
            file.className = "";
            msgFile.innerHTML = "";
        }
    }
}
function validateForm() {
    if(required(form.name)) {
        form.name.className = "";
        msgName.innerHTML = "";
    } else {
        form.name.className = "error";
        msgName.innerHTML = "Bạn cần phải nhập Tên"
    }
    if(emailRequired(form.email)) {
        form.email.className = "";
        msgEmail.innerHTML = "";
    } else {
        form.email.className = "error";
        msgEmail.innerHTML = "Bạn cần phải nhập Email"
    }
    if(urlRequired(form.website)) {
        form.website.className = "";
        msgWebsite.innerHTML = "";
    } else {
        form.website.className = "error";
        msgWebsite.innerHTML = "Bạn cần phải nhập Website đúng định dạng"
    }
    onlyFile();
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

function emailRequired(element) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(element.value);
}
function urlRequired(element) {
    var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
    return re.test(element.value)
}
