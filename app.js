const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    // // load data
    fetch(url)
    .then (res => res.json())
    .then( data =>  displayMeals(data.categories))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');

    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'single-result row align-items-center my-3 p-3';
        mealDiv.innerHTML = `
        <div class="col-md-9">
                <h3 class="lyrics-name">${meal.strCategory}</h3>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyric()" class="btn btn-success">Get Order</button>
            </div>
        `;
        mealContainer.appendChild(mealDiv);
    })

//     const songContainer = document.getElementById('song-container');
//     // songContainer.innerHTML = '';
//     
//         const songDiv = document.createElement('div');
//         songDiv.className = 'single-result row align-items-center my-3 p-3'
//         songDiv.innerHTML = `
//             <div class="col-md-9">
//                 <h3 class="lyrics-name">${song.title}</h3>
//                 <p class="author lead">Album by <span>${song.artist.name}</span></p>
//                 <audio controls>
//                     <source src="${song.preview}" type="audio/mpeg">
//                 </audio>
//             </div>
//             <div class="col-md-3 text-md-right text-center">
//                 <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
//             </div>
//         `;
//         songContainer.appendChild(songDiv);
//     })
}

// const getLyric = async (artist, title) =>{
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayLyrics(data.lyrics);
// }

// // const getLyric = (artist, title) =>{
// //     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
// //     fetch(url)
// //     .then(res => res.json())
// //     .then(data => displayLyrics(data.lyrics))
// // }

// const displayLyrics = lyrics => {
//     const lyricsDiv = document.getElementById('song-lyrics');
//     lyricsDiv.innerText = lyrics;
// }