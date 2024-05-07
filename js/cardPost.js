
let randomTag =(lista)=>{
    item = Math.floor(Math.random()*(lista.length))
    return lista[item]
}
let tags = ['csharp','dotnet','programming','tools','beginers','react','java','tutorial','python','php','javascript','webdev','ruby','rails','design']
let tag = randomTag(tags)

const getData = async () => {
    let response = await fetch('https://reto-js-bd894-default-rtdb.firebaseio.com/.json')

    let data = await response.json()

    let keys = Object.keys(data) //Me devuelve un array de unicamente las llaves

    let postArray = keys.map((key) => {
        return { ...data[key], key }
    })


    return postArray
    // printCards(postArray, 'card-wrapper')

}



let createCard =  (postArray) => {
    let { name, avatar, date, reactions, title, reactionsNumber, timeAgo} = postArray

    let postSection = document.createElement('div')
    postSection.classList.add('card', 'post-section')

    


    let postContent = document.createElement('div')
    postContent.classList.add('post-content')

    
    let postTitle = document.createElement('div')
    postTitle.classList.add('post-title')
    
    
    let postMeta = document.createElement('div')
    postMeta.classList.add('post-meta')
    

    
    let postAuthor = document.createElement('div')
    postAuthor.classList.add('post-autor')
    

    
    let imgAvatar = document.createElement('img')
    imgAvatar.classList.add('avatar', 'radius-50')
    imgAvatar.setAttribute('src', avatar)
    imgAvatar.setAttribute('alt', "Avatar")
    
    let postTitleInfo = document.createElement('div')
    postTitleInfo.classList.add('post-title-info')
    

    
    let containerName = document.createElement('div')
    let textName = document.createTextNode(name)
    
    let containerDate = document.createElement('div')
    let textDate = document.createTextNode(date)
    

    
    let postIndention = document.createElement('div')
    postIndention.classList.add('post-indention')
    

    
    let postTitleIndention = document.createElement('div')
    postTitleIndention.classList.add('title')
    
    let textIndention = document.createTextNode(title)   

    
    let containerTags = document.createElement('div')
    containerTags.classList.add('tags')
    

    
    let tagProductivity = document.createElement('div')
    tagProductivity.classList.add('card','tag','tag-productivity')
    
    let tagProductivitytext =document.createTextNode(`#${tag}`)

    
    let bottom =  document.createElement('div')
    bottom.classList.add('bottom')
    

    let details = document.createElement('div')
    details.classList.add('details')
    

    
    let cardReactions = document.createElement('div')
    cardReactions.classList.add('card','reactions')
    
    
    let cardIcons = document.createElement('div')
    cardIcons.classList.add('reactions-icons')
    

    
    let spanIcons = document.createElement('span')
    spanIcons.classList.add('reaction-icon')
    
    let imgIcons = document.createElement('img')
    imgIcons.setAttribute('src',reactions)
    imgIcons.setAttribute('width','24')
    imgIcons.setAttribute('heigth','24')
    

    
    let countReact = document.createElement('div')
    countReact.classList.add('reactions-counter')
    
    
    let countReactNumber = document.createTextNode(`${reactionsNumber}`)

    
    let countSpan = document.createElement('span')
    countSpan.classList.add('d-none','d-sm-contents')
    
    let countSpanText = document.createTextNode('reactions')    

    
    let cardComents = document.createElement('div')
    cardComents.classList.add('card','comments')
    
    
    let imgSvg= document.createElement('img')
    imgSvg.setAttribute('src','./img/svg/icon-comment.svg')
    imgSvg.classList.add('icon')
    imgSvg.setAttribute('alt','comment')
    
    let spanRuby = document.createElement('span')
    spanRuby.classList.add('d-ruby')
    
    let spanNone = document.createElement('span')
    spanNone.classList.add('d-none','d-sm-contents')
    
    let spanNoneTexto = document.createTextNode('Add Comment')
    


    
    let save = document.createElement('div')
    save.classList.add('save')
    
    let saveText = document.createTextNode(`${timeAgo} min read`)

    
    let svg = document.createElement('svg')
    svg.classList.add('icon','icon-bookmark')
    svg.setAttribute('xmlns',"http://www.w3.org/2000/svg")
    svg.setAttribute('width','24')
    svg.setAttribute('heigth','24')
    svg.setAttribute('aria-hidden','true')
    
    let path = document.createElement('path')
    path.setAttribute('d','M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z')
    
    svg.append(path)
    save.append(svg)
    postSection.append(postContent)
    postContent.append(postTitle,postIndention)
    postTitleInfo.append(containerName,containerDate)
    postAuthor.append(imgAvatar)
    postMeta.append(postAuthor,postTitleInfo)
    postTitle.append(postMeta)
    details.append(cardReactions,cardComents)
    bottom.append(details,save)
    tagProductivity.append(tagProductivitytext)
    containerTags.append(tagProductivity)
    postTitleIndention.append(textIndention) 
    postIndention.append(postTitleIndention,containerTags,bottom)
    containerDate.append(textDate)
    containerName.append(textName)
    countSpan.append(countSpanText)
    countReact.append(countReactNumber,countSpan)
    spanIcons.append(imgIcons)
    cardIcons.append(spanIcons)
    cardReactions.append(cardIcons,countReact)
    save.append(saveText)
    spanRuby.append(spanNone)
    spanNone.append(spanNoneTexto)
    cardComents.append(imgSvg,spanRuby)




    
    return postSection
    
}

let printCards = async (postArray, wrapperId) => {
    let wrapper = document.getElementById(wrapperId)
    //Esto me elimina los elementos anteriores para dar paso a los nuevos
    wrapper.innerHTML = ''
    postArray.forEach((post) => {
        let postItem = createCard(post)
        
        wrapper.append(postItem)
    })
}

const printCardsAsync = async()=>{
    let postArray = await getData()
    printCards(postArray,'wrapper')
    console.log(postArray)
}

printCardsAsync()