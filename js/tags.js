const getData = async () => {
    let response = await fetch('https://reto-js-bd894-default-rtdb.firebaseio.com/.json')

    let data = await response.json()

    let keys = Object.keys(data) //Me devuelve un array de unicamente las llaves

    let postArray = keys.map((key) => {
        return { ...data[key], key }
    })

    console.log(postArray)
    return postArray

}

getData()
