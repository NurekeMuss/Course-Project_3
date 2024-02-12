// JavaScript code
const info1 = document.querySelector('#info1');
const info2 = document.querySelector('#info2');
const info3 = document.querySelector('#info3');

async function getTopStories() {
    try {
        const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=QTG8AYmGGgqRSgSH85ZZ1EfbRZywl7Tn');
        const data = await response.json();
        console.log(data);

        // Check the structure of the response and access the necessary information
        const stories = data.results || [];

        // Display information for each story in the corresponding container
        stories.slice(0, 3).forEach((item, index) => {
            const infoContainer = index === 0 ? info1 : index === 1 ? info2 : info3;
            if (item.multimedia && item.multimedia.length > 0) {
                // Use the URL from the first multimedia object
                const multimediaUrl = item.multimedia[0].url;
            
            infoContainer.innerHTML += `
           
            <div class="news" >
                <div class="left">
                <div class="top">
                <div class="infoTop">
                    <img src="${multimediaUrl}" alt="">
                    <p>${item.byline}</p>
                    <span>in</span>
                    <p>${item.section}</p>
                    <span>·</span>
                    <span>${item.created_date}</span>
                </div>
                <div class="topText">
                    <h4>${item.title}</h4>
                    <p>${item.abstract}</p>
                </div>
            </div>
                    <div class="bottom">
                        <div class="infoBottom">
                        <div class="details">
                            <button><h4>JavaScript</h4></button>
                            <p>12min read</p>
                            <span>.</span>
                            <p>Selected for you</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            <img src="${multimediaUrl}" alt="" width="265px" height="265px" style ="border-raduis:5px">
            </div>
            
            <hr>
        `;
    }});
    } catch (error) {
        console.error(error);
    }
}

getTopStories();
