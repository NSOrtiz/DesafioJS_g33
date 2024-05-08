const sendPost = async (postObject) =>{
    let sendData = await fetch(
        "https://postform-4f43d-default-rtdb.firebaseio.com/Post/.json",
    {
        method: "POST",
        body: JSON.stringify(postObject),
    })
    let data =await sendData.json()
    console.log(data)

}


export { sendPost}