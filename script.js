function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

//   Pegar a tag img 
  const img = document.querySelector("#profile img")

// Substituir a Imagem 
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light 
    img.setAttribute("src", './img/avatar2.png')
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", './img/avatar.png')

  }
}
