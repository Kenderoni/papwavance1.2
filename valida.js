/*Registro*/

function validateForm() {
    var x = document.forms["registra"]["nombre"].value;
    var y = document.forms["registra"]["pass"].value;
    var z = document.forms["registra"]["email"].value;
    if (x == "" || y == ""|| z == "") {
        alert("Hay un dato faltante en el formulario");
        return false;
    }else{
        alert("Todo correcto, y yo que me alegro");
        return true;
    }
}

/*INICIOSESION*/

function validaSesion() {
    var x = document.forms["login"]["nombre"].value;
    var y = document.forms["login"]["pass"].value;
    if (x == "" || y == "") {
        alert("Hay un dato faltante en el formulario");
        return false;
    }else{
        alert("Todo correcto, y yo que me alegro");
        return true;
    }
}

5