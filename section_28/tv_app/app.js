const form = document.querySelector('#searchForm');
const url = 'https://api.tvmaze.com/search/shows'

const addImages = (shows) => {
    for (let result of shows) {
        if (!result.show.image) continue
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        document.body.appendChild(img);
    }
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    try {
        const config = {params: {q:searchTerm}};
        const res = await axios.get(url, config);
        addImages(res.data);
    }
    catch (e) {
        console.log(e)
    }
})
