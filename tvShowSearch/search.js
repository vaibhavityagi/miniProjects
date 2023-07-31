// selecting the elements
const query = document.querySelector('#searchBar')
const submit = document.querySelector('button')
const container = document.querySelector('.container')


// functions
const removeImages = () => {
    const allImages = document.querySelectorAll('img')
    for (let image of allImages) {
        image.remove()
    }
}

const printImages = (data) => {
    for (let ele of data) {
        if (ele.show.image) {
            const imgAd = ele.show.image.medium
            const newShow = document.createElement('img')
            newShow.src = imgAd
            container.append(newShow)
        }
    }
    query.value = ""
}

const err = () => {
    const errM = document.createElement('p')
    errM.append('Oh, no! Connection error')
    document.body.append(errM)
}

let cnt = 0;
const fetchData = async () => {
    try {
        // in case there are multiple things to be added to the url, better this way than to directly add on the url
        const config = { params: { q: query.value } }
        const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
        cnt++;
        if (cnt > 1) removeImages()
        printImages(res.data)
    } catch (e) {
        err()
    }

}

// event listeners
submit.addEventListener('click', fetchData)