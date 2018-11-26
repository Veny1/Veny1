function LogIn() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;

    
    if (a == "adminbpm" && b == "bpm123") {      
        window.location.href="bpm profil admin.html";
    } else {
        alert("Password atau Username Salah");
    }

    if (a == "adminbem" && b == "bem123") {       
        window.location.href="bem profil admin.html";
    } else {
        alert("Password atau Username Salah");
    }
    
    if (a == "adminhimasif" && b == "himasif123") {       
        window.location.href="himasif profil admin.html";
    } else {
        alert("Password atau Username Salah");
    }
    
    if (a == "adminetalase" && b == "etalase123") {      
        window.location.href="etalase profil admin.html";
    } else {
        alert("Password atau Username Salah");
    }
    
    if (a == "adminmaco" && b == "maco123") {       
        window.location.href="maco profil admin.html";
    } else {
        alert("Password atau Username Salah");
    }
    
    if (a == "adminbalwana" && b == "balwana123") {   
        window.location.href="balwana profil admin.html";
    } else {
        alert("Password atau Username Salah");
    }
   
    if (a == "adminlaos" && b == "laos123") {       
        window.location.href="laos profil admin.html";
    } else {
        alert("Password atau Username Salah");
    }
    
    if (a == "adminbinary" && b == "binary123") {       
        window.location.href="binary profil admin.html";
    } else {
        alert("Password atau Username Salah");
    }
}