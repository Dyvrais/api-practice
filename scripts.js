const image1 = document.querySelector('.img1');
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");
const image4 = document.querySelector(".img4");
const image5 = document.querySelector(".img5");
const searchBtn = document.querySelector('button');
const searchBar = document.querySelector('.search-bar');
        
let gifs = {
    "ApiKey": "6Eh11Qr4Adxqk5MBVwgiVxVKr2Gaylgt",
        getGifs: function(search){
            fetch('http://api.giphy.com/v1/gifs/search?q='
            + search 
            + '&api_key=' 
            + this.ApiKey 
            + '&limit=5'
            , {mode: 'cors'})
        
            .then(function (response){
                return(response.json());
            })
            .then(function(response){
                image1.src = response.data[0].images.original.url;
                image2.src = response.data[1].images.original.url;
                image3.src = response.data[2].images.original.url;
                image4.src = response.data[3].images.original.url;
                image5.src = response.data[4].images.original.ur
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