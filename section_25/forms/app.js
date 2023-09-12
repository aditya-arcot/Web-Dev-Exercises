const form = document.querySelector("form");
const username = form.elements.username;
const tweet = form.elements.tweet;
const ul = document.querySelector("ul");

const addTweet = () => {
    const bTag = document.createElement('b');
    bTag.append(username.value);
    const newTweet = document.createElement('li');
    newTweet.append(bTag, ` - ${tweet.value}`);
    ul.append(newTweet);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTweet();
    username.value = '';
    tweet.value = '';
});

ul.addEventListener('click', (e) => {
    if (e.target.nodeName === 'LI'){
        e.target.remove();
    }
    else {
        e.target.parentElement.remove();
    }
})