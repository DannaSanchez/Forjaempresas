//Debe realizar un inicio de sesión quemado, es decir, asignar el usuario Admin y la contraseña Kuepa2022 por defecto, si los datos ingresados coinciden con estos valores, el sistema permitirá el ingreso y mostrará el Dashboard, si no lo son mostrara un mensaje en pantalla que diga error de credenciales.
let formulario=document.querySelector(".log");

formulario.onsubmit=tipo=(e)=>{
    e.preventDefault();
    let user=document.getElementById("name").value;
    let password=document.getElementById("password").value;
    let respuesta=document.querySelector("#alerta")
    if(user=="Admin" && password=="Kuepa2022"){
            console.log("Usuario correcto")
            window.setTimeout(()=>{window.location.href="dashboard.html"},1000);
        }
    else{
        console.log("Error de credenciales, por favor vuelva a intentar");
        let texts=`<p>Error de credenciales, por favor vuelva a intentar</p>`
        respuesta.innerHTML=texts
        respuesta.style.setProperty("Visibility","visible")
        respuesta.style.setProperty("opacity","1")
    }
}
