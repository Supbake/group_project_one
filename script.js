const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'jikan1.p.rapidapi.com',
		'X-RapidAPI-Key': '721bd258a5msh04199b8f737442dp1f4a59jsn51d663c01ca8'
	}
};



const list = document.getElementById("anime-list");

fetch('https://jikan1.p.rapidapi.com/top/anime/1/upcoming', options)
	.then(response => response.json())
	.then(data => {

        let value = data.top
        for (let i = 0; i < 10; i++) {
            console.log(value[i]);
            let animeList = document.createElement("li");
            list.append(animeList);
            let topTenTitle = document.createElement("p");
            topTenTitle.textContent = value[i].title;
            animeList.append(topTenTitle);
            let topTenImg = document.createElement("img");
            topTenImg.src = value[i].image_url
            animeList.append(topTenImg);
    }
});



    const mangaContainer = document.querySelector('.manga-list');


    const selections = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'manga-scraper-for-mangakakalot-website.p.rapidapi.com',
            'X-RapidAPI-Key': '09a4e7faf2msh523a4db1e7ece89p1a8bf2jsn108177f4fbaf'
        }
    }


    fetch('https://manga-scraper-for-mangakakalot-website.p.rapidapi.com/search?keyword=memori&page=1', selections)
        .then(response => response.json())
        .then(info => {
            console.log(info)
            let value = info.data
            for(let i=0; i<10; i++){
                let topTenViews = document.createElement("li");
                mangaContainer.appendChild(topTenViews);
                let topTenTitle = document.createElement("p")
                topTenTitle.textContent = value[i].title;
                topTenViews.append(topTenTitle);
                let topTenImg = document.createElement("img");
                topTenImg.src = value[i].thumbnail_url
                topTenViews.append(topTenImg);
            }
            
});


let mangaBtn = document.querySelector('#mangaBtn');

mangaBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let mangaInput = document.querySelector('#mangaSearch').value;


const mangaSearchOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'manga-scraper-for-mangakakalot-website.p.rapidapi.com',
            'X-RapidAPI-Key': '09a4e7faf2msh523a4db1e7ece89p1a8bf2jsn108177f4fbaf'
        }
    };
    
    fetch(`https://manga-scraper-for-mangakakalot-website.p.rapidapi.com/search?keyword=${mangaInput}&page=1`, mangaSearchOptions)
        .then(response => response.json())
        .then(response => {
            let data = response.data;
            console.log(response)
            let mangaSearchContainer = document.querySelector('.mangaSearchContainer')
            mangaSearchContainer.innerHTML = '';

            for(let i = 0; i < data.length; i++) {
                let mangaTitle = document.createElement('h1');
                mangaTitle.textContent = data[i].title;
                mangaSearchContainer.appendChild(mangaTitle)
            }
        
        })
        .catch(err => console.error(err));

    console.log(mangaInput)
 })