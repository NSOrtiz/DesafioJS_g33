const getData = async (postKey) => {
    let response = await fetch(`https://reto-js-bd894-default-rtdb.firebaseio.com/${postKey}.json`)

    let data = await response.json()

    return data;
}

const url = window.location.href

const params = new URLSearchParams(new URL(url).search)

let key = params.get('key')

const printPostData = async (postKey)=>{
    let postData = await getData(postKey)
    let {imgPost,img,name,date,title,tags,text} =postData
    console.log(postData)
    let imgagePost = document.getElementById('imgPost')
    imgagePost.setAttribute('src',imgPost)

    let imagePerson = document.getElementById('img')
    imagePerson.setAttribute('src',img)
    imagePerson.setAttribute('alt',name)

    document.getElementById('name').innerText=name
    document.getElementById('date').innerText=date
    document.getElementById('title').innerText=title
    document.getElementById('text').innerText=text

    let tagList = tags.split(',');
    console.log(tagList)

    let tagElements = tagList.map(tag => {
        let tagSpan = document.createElement('span');
        tagSpan.classList.add('tag');
        tagSpan.textContent = `#${tag} `; 
        return tagSpan;
    })

    let containerTags = document.createElement('div');
    containerTags.classList.add('tags');
    tagElements.forEach(tag => {
        containerTags.appendChild(tag);
    });

    let wrapper = document.getElementById('wrapperTags')
    wrapper.append(containerTags)


}

const printAside = async(postKey)=>{
    let postData = await getData(postKey)
    let {img,name,descrip} =postData
    let imgageAvatar = document.getElementById('imgAuthor')
    imgageAvatar.setAttribute('src',img)
    document.getElementById('spanName').innerText=name
    document.getElementById('descrip').innerText=descrip


}

printPostData(key)
printAside(key)