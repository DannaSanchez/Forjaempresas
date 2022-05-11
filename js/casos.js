//Caso 1: El primer paciente con documento de identidad 52368795, para este paciente se debe mostrar en una alerta que cuenta con la primera dosis, para esto debe aparecer la vacuna y la fecha en la que se realizó el proceso (“datos ficticios”), a su vez debe redirigirlo al formulario para registrar su segunda dosis
let busqueda=document.querySelector(".medico");
busqueda.onsubmit=tipo=(i)=>{
    i.preventDefault();
    let cedula=parseInt(document.getElementById("numeroCed").value);
    if (cedula=="52368795"){
        Swal.fire({
            title: "Luis Diaz: #52368795 de Cédula",
            text: ' se aplicó la primera dosis el día 01/12/2021 con el biológico Pfizer. Para registrar la información de la segunda dosis, ingrese aquí: ',
            imageUrl: 'http://127.0.0.1:5500/img/0-logoforja.png',
            imageAlt: 'Custom image',
            showCancelButton: true,
            confirmButtonColor: 'rgb(243, 97, 14)',
            cancelButtonColor: 'rgb(29, 27, 69)',
            confirmButtonText: 'registrar'
          }).then((result) => {
            if (result.isConfirmed) {
              window.setTimeout(()=>{window.location.href="formvacuna.html"},1000)
            }
          })
    }
    else if (cedula=="1001235478") {
        Swal.fire({
            title: " Alejandra Pineda:  #52368795 de Cédula ",
            text: 'Cuenta con la primera dosis aplicada el día 01/11/2021 y segunda dosis: 01/02/2022 con el biológico AstraZeneca. Para registrar la información de la tercera dosis, ingrese aquí:',
            imageUrl: 'http://127.0.0.1:5500/img/0-logoforja.png',
            showCancelButton: true,
            confirmButtonColor: 'rgb(243, 97, 14)',
            cancelButtonColor: 'rgb(29, 27, 69)',
            confirmButtonText: 'registrar'
          }).then((result) => {
            if (result.isConfirmed) {
              window.setTimeout(()=>{window.location.href="formvacuna.html"},1000)
            }
          })
    }
    else if (cedula=="25413574") {
        Swal.fire({
            title: "Carlos Medina: #25413574 de Cédula Cuenta con el esquema completo",
            text: 'primera dosis:01/11/2021, segunda dosis:05/02/2022, tercera dosis:30/04/2022 esquema de vacunación con el biológico AstraZeneca',
            imageUrl: 'http://127.0.0.1:5500/img/0-logoforja.png',
            confirmButtonColor: 'rgb(29, 27, 69)',
          })
        
    }
    else if (cedula=="1007203506") {
        Swal.fire({
            title: " Liseth Vargas: #1007203506 de Cédula ",
            text: 'No tiene ninguna dosis. Para registrar la información del paciente, ingrese aquí:',
            imageUrl: 'http://127.0.0.1:5500/img/0-logoforja.png',
            showCancelButton: true,
            confirmButtonColor: 'rgb(243, 97, 14)',
            cancelButtonColor: 'rgb(29, 27, 69)',
            confirmButtonText: 'registrar'
          }).then((result) => {
            if (result.isConfirmed) {
              window.setTimeout(()=>{window.location.href="formpacientes.html"},1000)
            }
          })
    }
    else{
      Swal.fire({
        title: "El número de identidad no se encuentra en nuestra base de datos",
        text: 'Si quiere ser usuario de Forja empresas, debes de realizar una inscripción al telefono 3815877',
        imageUrl: 'http://127.0.0.1:5500/img/0-logoforja.png',
        confirmButtonColor: 'rgb(29, 27, 69)',
      })
    }
}
