function validateForm(){
	var name = document.getElementById("name").value;
    	if(name == ""){
<<<<<<< HEAD
    		     alert("llenar el campo nombre por favor");
=======
    		var hermano = document.getElementById("name");
    		var text = document.createTextNode("Debe ingresar su nombre");
    		mensaje(hermano,text);
>>>>>>> 1d59ea509982f9c620f04c14627234e06def6b7f
       } else if (/^[a-z]/.test(name.charAt(0))){
   	       alert("Por favor ingrese la primera letra en mayuscula");
       } else if (/^[0-9]/.test(name.charAt(0))){
          alert("Por favor no ingrese numeros");
<<<<<<< HEAD
		}
		
=======
		}	
>>>>>>> 1d59ea509982f9c620f04c14627234e06def6b7f
	var lastname = document.getElementById("lastname").value;
	    if (lastname == null || lastname.length == 0){
		     var hermano = document.getElementById("lastname");
             var text = document.createTextNode("Debe ingresar su apellido");
             mensaje(hermano,text);
	}
	var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(email) ){
         var hermano = document.getElementById("input-email");
         var text = document.createTextNode("Verifique su e-mail");
         mensaje(hermano, text);
    }
	var password = document.getElementById("input-password").value;
	    if (password == "") {
		    alert("llenar el campo contraseña por favor");
	    } else if (password.length < 6){ 
             var hermano = document.getElementById("input-password");
			 var text = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
			 mensaje(hermano, text);
        } else if (password == "123456" || password == "password" || password == "098754"){
    	     alert("ingresa contraseña valida");
    }
    var menu = document.querySelector("select").value;
	     if (menu == 0) {
		     var hermano = document.getElementsByTagName("select")[0];
		     var text = document.createTextNode("Debes seleccionar al menos un tipo de bici");
		     mensaje(hermano, text);		
	}     
	function mensaje (hermano, text){
	     var cuadroMensaje = document.createElement("span");
	     var padreMensaje = hermano.parentNode;

	padreMensaje.insertBefore(cuadroMensaje,hermano);
	cuadroMensaje.appendChild(text);
	return cuadroMensaje;
    }
}