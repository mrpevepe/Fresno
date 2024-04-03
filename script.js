const listaDeMusicas = document.querySelectorAll("li");

if (listaDeMusicas.length) {
  const audioPlayer = document.querySelector("#audioPlayer");

  listaDeMusicas.forEach(liLoopHandler);

  function liLoopHandler(li) {
    li.addEventListener("click", liClickHandler);

    function liClickHandler() {
      const selected = document.querySelector(".selected");
      if (selected) {
        selected.classList.remove("selected");
      }
      const nomeDaMusica = li.dataset.src;
      audioPlayer.src = "./" + nomeDaMusica;
      audioPlayer.play();
      li.classList.add("selected");
    }
  }
}
