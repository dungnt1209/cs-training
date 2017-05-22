(function (exports) {
    function valOrFunction(val, ctx, args) {
        if (typeof val == "function") {
            return val.apply(ctx, args);
        } else {
            return val;
        }
    };
    //with attr required
    function InvalidInputHelper(input, options) {
        input.setCustomValidity(valOrFunction(options.defaultText, window, [input]));

        function changeOrInput() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
                input.setCustomValidity("");
            }
        }

        function invalid() {
            if (input.value == "") {
                input.setCustomValidity(valOrFunction(options.emptyText, window, [input]));
            } else {
               input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
            }
        }

        input.addEventListener("change", changeOrInput);
        input.addEventListener("input", changeOrInput);
        input.addEventListener("invalid", invalid);
    };

    exports.InvalidInputHelper = InvalidInputHelper;

    //not attr required
    function InvalidInputNotRequired(input, options) {
        function changeOrInput() {
            if (input.value == "") {
                //...
            } else {
                input.setCustomValidity("");
            }
        }

        function invalid() {
            if (input.value == "") {
                //...
            } else {
               input.setCustomValidity(valOrFunction(options.invalidText, window, [input]));
            }
        }

        input.addEventListener("change", changeOrInput);
        input.addEventListener("input", changeOrInput);
        input.addEventListener("invalid", invalid);
    };

    exports.InvalidInputNotRequired = InvalidInputNotRequired;

    function checkFileSize() {
      var FS = document.getElementById("fupl");
      var files = FS.files;

      // If there is (at least) one file selected
      if (files.length > 0) {
         if (files[0].size > 1024 * 1024) { // Check the constraint
           FS.setCustomValidity("Bạn chỉ được Upload file có dụng lượng dưới 1MB");
           return;
         }
      }
      // No custom constraint violation
      FS.setCustomValidity("");
    }

    exports.checkFileSize = checkFileSize;
})(window);

/////////////////////////// - Run - \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

InvalidInputHelper(document.getElementById("femail"), {
    defaultText: "Bạn cần phải nhập Email!",
    emptyText: "Bạn cần phải nhập Email!",
    invalidText: function (input) {
        return 'The email address "' + input.value + '" is not valid same to abc@abc.abc!';
    }
});

InvalidInputHelper(document.getElementById("fname"), {
    defaultText: "Bạn cần phải nhập tên!",
    emptyText: "Bạn cần phải nhập tên!",
    invalidText: function (input) {
        return 'The name "' + input.value + '" is not valid';
    }
});

InvalidInputNotRequired(document.getElementById("fweb"), {
    defaultText: "Bạn cần nhập website cho đúng định dạng!",
    emptyText: "Bạn cần nhập website cho đúng định dạng!",
    invalidText: function (input) {
        return 'Bạn cần nhập website cho đúng định dạng';
    }
});

InvalidInputNotRequired(document.getElementById("fphone"), {
    defaultText: "Bạn Chỉ được nhập số!",
    emptyText: "Bạn Chỉ được nhập số!",
    invalidText: function (input) {
        return 'Bạn Chỉ được nhập số';
    }
});

window.onload = function () {
  document.getElementById("fupl").onchange = checkFileSize;
}

var length = sessionStorage.length;
var length_s = localStorage.length;
console.log(length_s);

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

window.onload = function() {
    var $name = document.getElementById("fname"), 
        $email = document.getElementById("femail"),
        $web = document.getElementById("fweb"),
        $phone = document.getElementById("fphone"),
        $upload = document.getElementById("fupl");

    

    

    if (localStorage) {
        document.getElementById('formsub').addEventListener('submit', function() {
            var $setname = $name.value, 
                $setemail = $email.value,
                $setweb = $web.value,
                $setphone = $phone.value,
                $setupload = $upload.value;

            localStorage.setItem('name', $setname);
            localStorage.setItem('email', $setemail);
            localStorage.setItem('website', $setweb);
            localStorage.setItem('phone', $setphone);
            localStorage.setItem('uploadFile', $setupload);
        });

        document.getElementById('clearstorage').addEventListener('click', function(){
            localStorage.removeItem('name');
            localStorage.removeItem('email');
            localStorage.removeItem('website');
            localStorage.removeItem('phone');
            localStorage.removeItem('uploadFile');
        })

      

        var $getname = localStorage.getItem('name'),
            $getemail = localStorage.getItem('email'),
            $getweb = localStorage.getItem('website'),
            $getphone = localStorage.getItem('phone'),
            $getupload = localStorage.getItem('uploadFile');


        if ($getname != "undefined" && $getname != "null" && $getname != "") {
            document.getElementById('welcomeMessage').innerHTML =   "<li> Name: "+$getname+"</li>"
                                                                    +"<li> Name: "+$getemail+"</li>"
                                                                    +"<li> Name: "+$getweb+"</li>"
                                                                    +"<li> Name: "+$getphone+"</li>"
                                                                    +"<li> Name: "+$getupload+"</li>";
        } else {
            document.getElementById('welcomeMessage').innerHTML = "<li></li>";
        }  
    }
}