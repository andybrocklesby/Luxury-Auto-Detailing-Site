import services from './data.js'

const serviceContainer = document.getElementById('service-container')
const footer = document.getElementById('footer')
const contactForm = document.getElementById('form')
const contactSection = document.getElementById('contact')

contactForm.addEventListener('submit', function(e){
    e.preventDefault()
    const form = document.getElementById('form')
    const formData = new FormData(form)
    const formName = formData.get('name');
    contactSection.innerHTML = `Thanks ${formName}, we will get back to you shortly...`
})


const generateService = () => {
    let serviceHtml = ''
    services.forEach(service => {
        const {
            title,
            image,
            description,
            price
        } = service;
        serviceHtml += `
                <div class="service">
                    <img class="service-img" src="${image}" alt="">
                    <div class="service-title">${title}</div>
                    <div class="service-description">${description}</div>
                    <div class="service-price">Starting at ${price}</div>
                </div>
        ` 
    })
    return serviceHtml
}


const createFooterCopyright = () => {
    const year = new Date()
    return `&copy ${year.getFullYear()} NorthWest Finesse | All Rights Reserved`
}


const render = () => {
    serviceContainer.innerHTML = generateService()
    footer.innerHTML = createFooterCopyright()
}


render()