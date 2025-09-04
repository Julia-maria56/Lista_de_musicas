const blur = document.querySelector(".blur");
const minha_playlist = document.getElementById("minha_playlist");
const musicas = document.querySelector(".musicas");
const BtnAddPlaylist = document.querySelector(".add");
const playlist_container = document.querySelector(
  "#minha_playlist_container ul"
);
const input = document.querySelector(".input-container input");
function abrirMinhaPlaylist() {
  blur.classList.add("active");
  minha_playlist.classList.add("active");
}
ScrollReveal().reveal(".musicas", {
  origin: "bottom",
  duration: 1000,
  distance: "20px",
});

function sairMinhaPlaylist() {
  blur.classList.remove("active");
  minha_playlist.classList.remove("active");
}

let SpeakNow = {
  CancaoImagem: "images/speak_now.jpg",
  CancaoNome: "Speak now",
  CancaoAlbum: "Speak now",
  CancaoArtista: "Taylor Swift",
  id: 1,
};

let Red = {
  CancaoImagem: "images/red.jpg",
  CancaoNome: "Red",
  CancaoAlbum: "Red",
  CancaoArtista: "Taylor Swift",
  id: 2,
};

let DeathByAThousandCuts = {
  CancaoImagem: "images/death.png",
  CancaoNome: "Death by a thousand cuts",
  CancaoAlbum: "Lover",
  CancaoArtista: "Taylor Swift",
  id: 3,
};

let Lover = {
  CancaoImagem: "images/lover.png",
  CancaoNome: "Lover",
  CancaoAlbum: "Lover",
  CancaoArtista: "Taylor Swift",
  id: 4,
};

let Ivy = {
  CancaoImagem: "images/ivy.jpg",
  CancaoNome: "Ivy",
  CancaoAlbum: "Evermore",
  CancaoArtista: "Taylor Swift",
  id: 5,
};

let CowboyLikeMe = {
  CancaoImagem: "images/cowboy.webp",
  CancaoNome: "Cowboy like me",
  CancaoAlbum: "Evermore",
  CancaoArtista: "Taylor Swift",
  id: 6,
};

let theBolter = {
  CancaoImagem: "images/cowboy.webp",
  CancaoNome: "The bolter",
  CancaoAlbum: "The tortured",
  CancaoArtista: "Taylor Swift",
  id: 7,
};

let arrayCancoes = [
  SpeakNow,
  Red,
  DeathByAThousandCuts,
  Lover,
  Ivy,
  CowboyLikeMe,
  theBolter,
];

function CarregarCancoes() {
  console.log("Carregando musicas");
  musicas.innerHTML = "";
  for (let index = 0; index < arrayCancoes.length; index++) {
    musicas.innerHTML += `
        <li class="perfil-musica">
                <img src=${arrayCancoes[index].CancaoImagem} alt="Foto da música ${arrayCancoes[index].CancaoNome}">
                <div class="infos-perfil-musica">
                    <h3 class="nome_cancao">${arrayCancoes[index].CancaoNome}</h3>
                    <h4 class="nome_album">${arrayCancoes[index].CancaoAlbum}</h4>
                    <h4 class="nome_artista">${arrayCancoes[index].CancaoArtista}</h4> 
                </div>
                <button class="add" onclick= "carregarMusicasPlaylist(${arrayCancoes[index].id})">
                    <img width="30" height="30" src="https://img.icons8.com/ios/30/ffffff/plus--v1.png" alt="plus--v1"/>
                </button>
            </li>
        `;
  }
}

CarregarCancoes();

let minhaPlaylistArray = [];

function listaMusicasPlaylist() {
  playlist_container.innerHTML = "";
  for (let index = 0; index < minhaPlaylistArray.length; index++) {
    playlist_container.innerHTML += `
        <li>
                    <hr>
                    <div class="info_playlist">
                        <p>${minhaPlaylistArray[index].CancaoNome} - ${minhaPlaylistArray[index].CancaoArtista} </p>
                        <img onclick="deletarCancaoPlaylist(${minhaPlaylistArray[index].id})" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/trash--v1.png" alt="trash--v1"/> 
                    </div>
                    <hr>
                </li>
        `;
  }
}

function carregarMusicasPlaylist(cancaoId) {
  let cancaoPlaylist = arrayCancoes.find((cancao) => cancao.id === cancaoId);
  const jaEsta = minhaPlaylistArray.some((musica) => musica.id === cancaoId);
  if (jaEsta) {
    alert("Você já adicionou essa música!");
    return;
  } else {
    minhaPlaylistArray.push(cancaoPlaylist);
    listaMusicasPlaylist();
  }
}

function deletarCancaoPlaylist(cancaoId) {
  minhaPlaylistArray = minhaPlaylistArray.filter(
    (cancao) => cancao.id != cancaoId
  );
  //  Deixa no array apenas as cancoes com ids diferentes do selecionado
  alert("Música apagada da plylist com sucesso");
  listaMusicasPlaylist();
}

function procurar() {
  const lis = document.querySelectorAll(".musicas li");
  lis.forEach((li) => {
    const nomeCancao = li.querySelector(".nome_cancao").innerText;
    const nomeAlbum = li.querySelector(".nome_album").innerText;
    const nomeArtista = li.querySelector(".nome_artista").innerText;

    if (
      !nomeCancao.includes(input.value) &&
      !nomeAlbum.includes(input.value) &&
      !nomeArtista.includes(input.value)
    ) {
      li.classList.add("oculto");
    } else {
      li.classList.remove("oculto");
    }
  });
}
