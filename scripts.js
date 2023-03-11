const image = document.querySelector('img');
const searchBtn = document.querySelector('button');
const searchBar = document.querySelector('.search-bar');

let gifs = {
    "ApiKey": "6Eh11Qr4Adxqk5MBVwgiVxVKr2Gaylgt",

    getGifs: function(search){
        fetch('https://api.giphy.com/v1/gifs/translate?api_key='
         + this.ApiKey 
         + '&s=' + search
         , {mode: 'cors'})

            .then(function (response){
                return(response.json());
            })
            .then(function(response){
                image.src = response.data.images.original.url;
            })
            .catch(e => {
                console.log(e);
            })
    },
    search: function(){
        this.getGifs(searchBar.value);
    }
}

function refresh(){
    if (searchBar.value == ""){
        alert('Please fill the text field before submiting');
    } else {
        gifs.search();
    }
};

document.addEventListener('DOMContentLoaded', gifs.getGifs("animals"));
searchBtn.addEventListener('click', refresh);

searchBar.addEventListener("keypress", function(e){
    if (e.key === "Enter"){
      e.preventDefault();
      refresh();
    }
  });