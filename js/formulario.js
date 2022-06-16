function validarDatos(e) {
  const resultado =
    Number(document.fm.fotogato.value) +
    Number(document.fm.club.value) +
    Number(document.fm.fondo.value) +
    Number(document.fm.barrio.value) +
    Number(document.fm.lugar.value);

  let chequeado = true;

  if (
    document.fm.fotogato.value === "" ||
    document.fm.club.value === "" ||
    document.fm.fondo.value === "" ||
    document.fm.barrio.value === "" ||
    document.fm.lugar.value === ""
  ) {
    chequeado = false;
  }
  

  if (chequeado) {
    // aca manejarias el resultado del puntaje.
    let mensaje = "El resultado es: " + resultado + " puntos.";
    if (resultado == 10) {
      mensaje += " ¡Felicitaciones! Obtuvo el puntaje máximo."
    } else if (resultado <=2) {
      mensaje += " Tomate un tiempo para ver nuestro blog y conocernos mejor. ¡Hasta pronto!"
    }
    let h3 = document.getElementById("resultado");
    h3.innerHTML = mensaje;
       
    e.preventDefault();
  }
}
