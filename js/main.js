
function inversion() {
    let cNombres = document.getElementById("nombres").value;
    let cTelefono = document.getElementById("telefono").value;
    let cEmail = document.getElementById("email").value;
    let cMonto = parseFloat(document.getElementById("inversion").value); 
    let cTiempo = parseInt(document.getElementById("tiempo").value);

    let contPre = document.querySelector('.pre-simulation');
    let contPost = document.querySelector('.post-simulation');

    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");

    let sNombre = document.getElementById("nombres-show");
    let sCorreo = document.getElementById("email-show");
    let sTiempo = document.getElementById("tiempo-show");
    let sInteres = document.getElementById("interes-show");
    let sTotal = document.getElementById("total-show");
    let sGanancia = document.getElementById("ganancia-show");


    sNombre.innerHTML = cNombres;
    sCorreo.innerHTML = cEmail;

    let interesMensual = 0;

    switch (cTiempo) {
        case 12:
            sTiempo.innerHTML = "12 MESES";
            interesMensual = 0.008;
            break;
        case 24:
            sTiempo.innerHTML = "24 MESES";
            interesMensual = 0.013; 
            break;
        case 36:
            sTiempo.innerHTML = "36 MESES";
            interesMensual = 0.017; 
            break;
        default:
            break;
    }

    let interesTotal = cMonto * interesMensual * cTiempo;
    let totalRecibir = cMonto + interesTotal;

    sInteres.innerHTML = (interesMensual * 100) + "%";
    sTotal.innerHTML = totalRecibir;

    let gananciaTotal = totalRecibir - cMonto;

    sGanancia.innerHTML = gananciaTotal; 

}
