const usuario = true;
const PuedePagar = true;

if(usuario && PuedePagar){
    document.write("Tu pago fue acreditado, feliz estadia!")
}else if(!usuario){
    document.write("Presiona Log in para iniciar sesion")
}else if(!PuedePagar){
    document.write("Pago rechasado, fondos insuficientes")
}else {
    document.write("ocurrio un error")
}


for (let i = 1; i <= 4; i+=1) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Huesped N° "+i+" Nombre: "+ingresarNombre);
}
