
// Get the modal
var modal = document.getElementById('id01');
var modal = document.getElementById('id02');


function validateForm() {
    var x = document.forms["myForm"]["uname"].value;
    var x1 = document.getElementById("psw").value;
    
    if (x == "" ) {
      alert("Name must be filled out");
      return false;
    }
    if(x1 =="")
    {
        alert("Password must be filled out");
        return false;
    }
    if(x1.length<8)
    {
        alert("Password must be atleast 8 characters");
        return false;

    }
    
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



