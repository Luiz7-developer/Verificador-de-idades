function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("resultado");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Vérifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      document.body.style.background = "#4cacec";
      if (idade >= 0 && idade < 14) {
        //CRIANÇA
        img.setAttribute("src", "./img/foto-bebe-m.png.jpg");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "./img/foto-jovem-m.png.jpg");
      } else if (idade < 50) {
        // ADULTO
        img.setAttribute("src", "./img/foto-adulto-m.png.jpg");
      } else {
        //IDOSO
        img.setAttribute("src", "./img/foto-idoso-m.png.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      document.body.style.background = "#f7bce3";
      if (idade >= 0 && idade < 14) {
        //CRIANÇA
        img.setAttribute("src", "./img/foto-bebe-f.png.jpg");
      } else if (idade < 21) {
        //JOVEM
        img.setAttribute("src", "./img/foto-jovem-f.png.jpg");
      } else if (idade < 50) {
        //ADULTO
        img.setAttribute("src", "./img/foto-adulto-f.png.jpg");
      } else {
        //IDOSO
        img.setAttribute("src", "./img/foto-idoso-f.png.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero}, com ${idade} Anos!`;
    res.appendChild(img);
  }
}
