let nombreUsuario = prompt ("ingrese su nombre de usuario")

if(nombreUsuario == "")
alert ("no ingresaste ningun dato")

else{
    alert ("nombre de usuario"+nombreUsuario)
}
while (nombreUsuario == ""){
    nombreUsuario = prompt ("ingrese nuevamente")
}