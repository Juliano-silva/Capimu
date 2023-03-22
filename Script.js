let Div = document.querySelector("#Mural")
function Button(){
    var Gerar = Math.floor(Math.random() * 101)
var Numero = Gerar
fetch("dados.json").then((response) => {
    response.json().then((dados) => {
        Div.innerHTML = `
       <img src=${JSON.stringify(dados.capivara[Numero].foto)}>
        `
    })
})
}
