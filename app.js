const API_KEY = '8a56108d4ec569621b8b6d00470cd48f';

function exibeFilme() {
    let divTela = document.getElementById('tela');
    let texto = '';

    let dados = JSON.parse (this.responseText);
    for (i = 0; i < dados.results.length; i++){
        let filme = dados.results[i];
        texto = texto + `
        <a href="https://www.themoviedb.org/movie/${filme.id}"><img src="https://image.tmdb.org/t/p/w300/${filme.poster_path}" alt=""></a>  
        `;
    };
    
    divTela.innerHTML = texto;
}

function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;
    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilme;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=pt-BR&page=1&include_adult=false&query=${query}&append_to_response=details`);
    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);