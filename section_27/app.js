const fakeRequestCallback = (url, success, failure) => {
    // simulate server request delay
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 3000) failure('connection timeout')
        else success(`here is your fake data from ${url}`)
    }, delay)
}

// callback hell
// fakeRequestCallback('books.com', 
//     (resp) => {
//         console.log(`it works - ${resp}`);
//         fakeRequestCallback('books.com/page1',
//             (resp) => {
//                 console.log(`it works 2 - ${resp}`);
//                 fakeRequestCallback('books.com/page2', 
//                     (resp) => {
//                         console.log(`it works 3 - ${resp}`);
//                     },
//                     (err) => {
//                         console.log(`error 3 - ${err}`)
//                     })
//             },
//             (err) => {
//                 console.log(`error 2 - ${err}`)
//             })
//     }, 
//     (err) => console.log(`error - ${err}`));



const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 3000) reject('connection timeout')
            else resolve(`here is your fake data from ${url}`)
        }, delay)
    })
}

// fakeRequestPromise('yelp.com/api')
//     .then(() => {
//         console.log('success')
//         fakeRequestPromise('yelp.com/api2')
//             .then(() => {
//                 console.log('success 2')
//                 fakeRequestPromise('yelp.com/api3')
//                     .then(() => {
//                         console.log('success 3')
//                     })
//                     .catch(() => {
//                         console.log('failure 3')
//                     })
//             })
//             .catch(() => {
//                 console.log('failure 2')
//             })
//     })
//     .catch(() => {
//         console.log('failure')
//     })

// fakeRequestPromise('yelp.com/api')
//     .then((data) => {
//         console.log(`success - ${data}`)
//         return fakeRequestPromise('yelp.com/api2')
//     })
//     .then((data) => {
//         console.log(`success 2 - ${data}`)
//         return fakeRequestPromise('yelp.com/api3')
//     })
//     .then((data) => {
//         console.log(`success 3 - ${data}`)
//     })
//     .catch((data) => {
//         console.log(`failure - ${data}`)
//     })

const makeRequest = async () => {
    try {
        let data = await fakeRequestPromise('abc');
        console.log(data);
        let data2 = await fakeRequestPromise('def');
        console.log(data2);
    }
    catch (e) {
        console.log(`error - ${e}`)
    }
}
makeRequest();



const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

const rainbow = async () => {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
    return 'done';
}

// rainbow().then(() => console.log('end of rainbow'))
const paintRainbow = async () => {
    await rainbow();
    console.log('end of rainbow')
}
paintRainbow();