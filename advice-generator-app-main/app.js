const id = document.querySelector('.adviceId')
const adv = document.querySelector('.advice')
const newAdv = document.querySelector('.new')

function remove() {
    id.innerHTML = ''
    adv.innerHTML = ''
}

const response = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice')
    const slip = res.data.slip
    remove()
    id.append(slip.id)
    adv.append(slip.advice)
}

newAdv.addEventListener('click', response)