let autuCompletWrapper = document.querySelector('.search-input')
let searchInputElems = document.querySelector('.inputElem')
let autocomBox = document.querySelector('.autocom-box')

searchInputElems.addEventListener('keyup', function (event) {
    let searchValue = searchInputElems.value

    if(searchValue){
        autuCompletWrapper.classList.add('active')

        let fillterWords = suggestions.filter(function(word){
            return word.toLowerCase().includes(searchValue.toLowerCase())
        })

        // console.log(fillterWords);
        suggestionWordsGenerator(fillterWords)

    } else{
        autuCompletWrapper.classList.remove('active')
    }
})

function suggestionWordsGenerator(wordsArray) {
    let listItemsArray = wordsArray.map(function (word) {
        return '<li>' + word + '</li>'
    })

    let customListItem;
    if (!listItemsArray.length) {
        customListItem = '<li>' + searchInputElems.value + '</li>'
    }else{
        customListItem = listItemsArray.join('')
    }

    autocomBox.innerHTML = customListItem
    select()
}

function select() {
    let allListItems = autocomBox.querySelectorAll('li')
    allListItems.forEach(function (wordItem) {
        wordItem.addEventListener('click', function (event) {
            searchInputElems.value = event.target.textContent
            autuCompletWrapper.classList.remove('active')
        })
    })
}