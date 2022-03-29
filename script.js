


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
const dataInfo = document.getElementById()
const totalViews = document.getElementById()
const topImg = document.getElementById()

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'manga-scraper-for-mangakakalot-website.p.rapidapi.com',
            'X-RapidAPI-Key': '09a4e7faf2msh523a4db1e7ece89p1a8bf2jsn108177f4fbaf'
        }
    };
    
    fetch('https://manga-scraper-for-mangakakalot-website.p.rapidapi.com/search?keyword=memori&page=1', options)
        .then(response => response.json())
        .then(info => {
            console.log(info)
            let value = info.data
            for(let i=0; i<10; i++){
                let topTenTitle = document.createElement("li")
                topTenTitle.textContent=value[i].title;
                topTenTitle.append(dataInfo)
                let topTenViews = document.createElement("p")
                totalViews.textContent = value[i].rank;
                let topTenImg = document.createElement("img")
                topTenImg.src = "imggit"

                console.log(topTenTitle)
                 // .catch(err => console.error(err));
    
            }
            })
        // .then(response => console.log(response))
        

