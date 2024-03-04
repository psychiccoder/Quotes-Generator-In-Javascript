const quote= document.getElementById("quote")
const author= document.getElementById("author")

const api_url= "https://api.quotable.io/random"

// async function getquote(url){
//     const response =await fetch(url);
//     let data= await response.json();
//     // console.log(data);
//     quote.innerHTML=data.content;
//     author.innerHTML=data.author;
// }

// getquote(api_url)


// With Then And Catch Keyword.

function getquote(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            quote.innerHTML = data.content;
            author.innerHTML = data.author;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

getquote(api_url);



