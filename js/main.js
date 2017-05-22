var $name = document.getElementById('name');
var $email = document.getElementById('email');
var $website = document.getElementById('website');
var $phone = document.getElementById('phone');
    function validateForm() {
		checkname()
		checkmail()
		checkweb()
		checkphone()
	};

	function checkname() {
		if($name.value == '') {
			$name.setCustomValidity('Bạn cần phải nhập Tên');
		}
		else {
			$name.setCustomValidity('');  
		}
	};

	function checkmail() {
		if($email.value == '') {
			$email.setCustomValidity('Bạn cần phải nhập Email');
		}
		else if ($email.validity.patternMismatch) {  
	        $email.setCustomValidity ("bạn cần nhập email đúng định dạng");  
	    }
		else {
			$email.setCustomValidity('');  
		}

	};

	function checkweb() {

		if ($website.validity.typeMismatch) {  
	        $website.setCustomValidity ("Bạn cần phải nhập website đúng định dang");  
	    }  
	    else {  
	       $website.setCustomValidity ("");  
		} 
		return false;
	};

	function checkphone() {
		if ($phone.validity.patternMismatch) {  
	        $phone.setCustomValidity ("Bạn cần phải nhập số");  
	    }  
	    else {  
	       $phone.setCustomValidity ("");  
		} 
		return false;
	};

	function checkupload() {
		var FS = document.getElementById("upload");
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
	};

	window.onload = function () {
	  document.getElementById("upload").onchange = checkupload;
	}