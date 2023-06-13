// function for creating top story cards
function createStoryCards(data) {
    // Check if top stories api returned an error
    if (data.cod == '404' || data.cod == '401') {
        alert('An error has occured. Please select a top stories section.')
        return
    }

    // iterate through all top stories 
    data.results.forEach(story => {
        // create divs controlling card sizing and alignment
        const cardDiv = document.createElement('div')
        cardDiv.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4')
        stories.append(cardDiv)

        // create divs for the actual cards
        const card = document.createElement('div')
        card.setAttribute('class', 'card h-100')
        cardDiv.append(card)

        // create card image
        let img = document.createElement('img')
        // check if story has an image to use
        if (story.multimedia != null) {
            img.setAttribute('src', `${story.multimedia[1].url}`)
            img.setAttribute('alt', 'Image for New York Times article')
            img.setAttribute('class', 'card-img-top')
            card.append(img)
        }

        // create card body
        const cardBody = document.createElement('div')
        cardBody.setAttribute('class', 'card-body')
        card.append(cardBody)

        // create card title and article link
        const title = document.createElement('div')
        title.setAttribute('class', 'card-title')
        title.innerHTML = `<a href="${story.url}" title="New York Time article titled ${story.title}">${story.title}</a>`
        cardBody.append(title)

        // create card subtitle
        const appearedSection = document.createElement('div')
        appearedSection.setAttribute('class', 'card-subtitle')
        appearedSection.innerText = `${story.section}`
        cardBody.append(appearedSection)

        // create published date object and set as a date string
        let publishedDate = new Date(story.published_date.substring(0, 10))
        publishedDate = publishedDate.toLocaleDateString('en-us', { month: "long", day: "2-digit", weekday: "long", year: "numeric" })

        // create card paragraph with abstract, byline, and published date
        const p = document.createElement('p')
        p.setAttribute('class', 'card-text')
        p.setAttribute('id', 'cardP')
        p.innerHTML = `${story.abstract}<br>${story.byline}`
        cardBody.append(p)

        // create card published date
        const published = document.createElement('p')
        published.setAttribute('class', 'card-text')
        published.setAttribute('id', 'published-date')
        published.innerText = `${publishedDate}`
        cardBody.append(published)

        // check if top story has required data
        if (story.url == "" || null || story.title == "" || null || story.abstract == "" || null) {
            cardDiv.remove()
        }
    });
}

// set variables
const stories = document.querySelector('#stories')
const apiKey = '' // insert your API key here

// event listener for page loading
window.addEventListener('load', function () {
    // clear our previous data
    stories.innerHTML = ''
    let section = document.querySelector('#section').value
    let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
    // fetch NYT api data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // call function for creating cards
            createStoryCards(data)
        }).catch((e) => {
            console.log(`This error occurred: ${e}`)
        })
})

// event listener for refresh button click
document.querySelector('#refresh').addEventListener('click', function () {
    // clear our previous data
    stories.innerHTML = ''
    let section = document.querySelector('#section').value
    let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
    // fetch NYT api data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // call function for creating cards
            createStoryCards(data)
        }).catch((e) => {
            console.log(`This error occurred: ${e}`)
        })
})

// event listener for select input change
document.querySelector('#section').addEventListener('change', function () {
    // clear out previous data
    stories.innerHTML = ''
    let section = document.querySelector('#section').value
    let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`
    // fetch NYT api data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // call function for creating cards
            createStoryCards(data)
        }).catch((e) => {
            console.log(`This error occurred: ${e}`)
        })
})
