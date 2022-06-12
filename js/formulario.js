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
    let h3 = document.getElementById("resultado");
    h3.innerHTML = "El resultado es: " + resultado + " puntos.";
       
    e.preventDefault();
  }
}
