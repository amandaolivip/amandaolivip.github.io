emailjs.init({publicKey: "2xS5TAk7YVWNZ_4u-"});

document.getElementById("form-contato").addEventListener("submit", function(event) {
  event.preventDefault();

  const btn = document.getElementById("btn-enviar");
  const btnText = document.getElementById("btn-text");
  const btnLoading = document.getElementById("btn-loading");

  btnText.style.display = "none";
  btnLoading.style.display = "inline";
  btn.disabled = true;

  emailjs.send(
    "service_r8835hg",
    "template_wxuqe8g",
    {
      nome: document.getElementById("nome").value,
      mensagem: document.getElementById("mensagem").value
    }
  )
  .then(() => {
    alert("Mensagem enviada com sucesso! 😸");
    this.reset();
  })
  .catch((erro) => {
    alert("Erro ao enviar mensagem 😿");
    console.error(erro);
  })
  .finally(() => {
    btnText.style.display = "inline";
    btnLoading.style.display = "none";
    btn.disabled = false;
  });

});