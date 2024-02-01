function encrypt() {
  let text = document.getElementById("text").value;
  let titleMsj = document.getElementById("title-msj");
  let paragraph = document.getElementById("paragraph");

  let encodedText = text
    .replace(/e/gi, "enT#er")
    .replace(/i/gi, "iMes")
    .replace(/a/gi, "aI")
    .replace(/o/gi, "obeS!")
    .replace(/u/gi, "ufaT")
    .replace(/y/gi, "nfs");

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
    .replace(/enT#er/gi, "e")
    .replace(/iMes/gi, "i")
    .replace(/aI/gi, "a")
    .replace(/obeS!/gi, "o")
    .replace(/ufaT/gi, "u")
    .replace(/nfs/gi, "y");

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
