
// finished js - jacob
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'jikan1.p.rapidapi.com',
		'X-RapidAPI-Key': '721bd258a5msh04199b8f737442dp1f4a59jsn51d663c01ca8'
	}
};


const topTitle = document.getElementById("anime-title");
const topRank = document.getElementById("anime-rank");
const topImg = document.getElementById("anime-image");

fetch('https://jikan1.p.rapidapi.com/top/anime/1/upcoming', options)
	.then(response => response.json())
	.then(data => {

        let value = data.top
        for (let i = 0; i < 10; i++) {
            console.log(value[i]);
            let topTenTitle = document.createElement("p");
            topTenTitle.textContent = value[i].title;
            topTitle.append(topTenTitle);
            let topTenRank = document.createElement("p");
            topTenRank.textContent = value[i].rank;
            topRank.append(topTenRank);
            let topTenImg = document.createElement("img");
            topTenImg = value[i].image_url;
            topImg.src = topTenImg;
        }
    });

// finished js - jacob 