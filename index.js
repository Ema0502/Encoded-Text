function encrypt() {
  let text = document.getElementById("text").value;
  let titleMsj = document.getElementById("title-msj");
  let paragraph = document.getElementById("paragraph");

  let encodedText = text
    .replace(/e/gi, "anTer")
    .replace(/i/gi, "eMes")
    .replace(/a/gi, "iI")
    .replace(/o/gi, "obeS")
    .replace(/u/gi, "ufaT")
    .replace(/y/gi, "nfs")
    .replace(/é/gi, "enTeR")
    .replace(/í/gi, "iMeS")
    .replace(/á/gi, "aI!")
    .replace(/ó/gi, "obeS_")
    .replace(/ú/gi, "ufaT")
    .replace(/n/gi, "gTA");

  document.body.classList.remove("background-decrypt");
  document.body.classList.add("background-encrypt");

  if (text.length !== 0) {
    document.getElementById("text").value = encodedText;
    titleMsj.textContent = "Successfully encrypted text";
    paragraph.textContent = "";
  } else {
    titleMsj.textContent = "No message found";
    paragraph.textContent = "Enter the text you want to encrypt or decrypt";
    swal("Ooops!", "You must enter a text", "warning");
  }
}

function decrypt() {
  let text = document.getElementById("text").value;
  let titleMsj = document.getElementById("title-msj");
  let paragraph = document.getElementById("paragraph");

  let encodedText = text
    .replace(/anTer/gi, "e")
    .replace(/eMes/gi, "i")
    .replace(/iI/gi, "a")
    .replace(/obeS/gi, "o")
    .replace(/ufaT/gi, "u")
    .replace(/nfs/gi, "y")
    .replace(/enTeR/gi, "é")
    .replace(/iMeS/gi, "í")
    .replace(/aI!/gi, "á")
    .replace(/obeS_/gi, "ó")
    .replace(/ufaT/gi, "ú")
    .replace(/gTA/gi, "n");

  document.body.classList.remove("background-encrypt");
  document.body.classList.add("background-decrypt");

  if (text.length !== 0) {
    document.getElementById("text").value = encodedText;
    titleMsj.textContent = "Text successfully decrypted";
    paragraph.textContent = "";
  } else {
    titleMsj.textContent = "No message found";
    paragraph.textContent = "Enter the text you want to encrypt or decrypt";
    swal("Ooops!", "You must enter a text", "warning");
  }
}
