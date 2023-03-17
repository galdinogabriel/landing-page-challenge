let leftToRight = {
    origin: "left",
    distance: "10%",
    duration: 2000,
    delay: 100,
    reset: true,
  };
  let rigthToLeft = {
    origin: "rigth",
    distance: "10%",
    duration: 2000,
    delay: 100,
    reset: true,
  };
  let bottomToTop = {
    origin: "bottom",
    distance: "20%",
    duration: 2000,
    delay: 100,
    reset: true,
    opacity: 0,
    scale: 1.2,
  };
  
  ScrollReveal().reveal(".apresentacao .conteudo__titulo, .caracteristicas , .rodape .conteudo__titulo", leftToRight);
  ScrollReveal().reveal(".conteudo__subtitulo", leftToRight);
  ScrollReveal().reveal(".apresentacao .conteudo__paragrafo, .caracteristicas .conteudo__paragrafo", leftToRight);
  ScrollReveal().reveal(".apresentacao__ilustracao", bottomToTop);
  ScrollReveal().reveal(".sobre-mim__card", leftToRight);
  ScrollReveal().reveal(".apresentacao__carreira", rigthToLeft);
  ScrollReveal().reveal(".caracteristicas__item__numero", leftToRight);
  ScrollReveal().reveal(
    ".projetos-grid__item--breve, .projetos-grid__item",
    leftToRight
  );
  