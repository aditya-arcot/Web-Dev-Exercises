// axios
//     .get('https://swapi.dev/api/people/1')
//     .then(res => console.log(res))
//     .catch(e => console.log(e));

const getStarWarsPerson = async id => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    }
    catch (e){
        console.log(e);
    }
};
// getStarWarsPerson(5);
// getStarWarsPerson(10);


const button = document.querySelector('button');
const ul = document.querySelector('ul');
const url = 'https://icanhazdadjoke.com/'
const headers = { headers: {Accept: 'application/json'} }

const addNewJoke = async () => {
    const joke = await getJoke();
    const li = document.createElement('li');
    li.innerText = joke;
    ul.appendChild(li);
}
const getJoke = async () => {
    try {
        const res = await axios.get(url, headers);
        return res.data.joke;
    }
    catch (e){
        return 'No jokes available';
    }
}
button.addEventListener('click', addNewJoke);
