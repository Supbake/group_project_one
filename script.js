

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'jikan1.p.rapidapi.com',
		'X-RapidAPI-Key': '721bd258a5msh04199b8f737442dp1f4a59jsn51d663c01ca8'
	}
};

fetch('https://jikan1.p.rapidapi.com/top/anime/1/upcoming', options)
	.then(response => response.json())
	.then(data => {
        console.log(data)
        let value = data.top
        for (let i = 0; i < 10; i++) {
            let topTenTitle = document.createElement("li");
            topTenBar.textContent = value[i].title;
            let topTenRank = document.createElement("li");
            topTenBar.textContent = value[i].rank;
            let topTenImg = document.createElement("li");
            topTenBar.textContent = value[i].image_url;
            (console.log(topTenBar))
            // query select (global)
            // append
        }
        
    });

