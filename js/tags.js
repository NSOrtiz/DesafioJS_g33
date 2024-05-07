let randomTag =(lista)=>{
    item = Math.floor(Math.random()*(lista.length))
    return lista[item]
}

let tags = ['csharp','dotnet','programming','tools','beginers','react','java','tutorial','python','php','javascript','webdev','ruby','rails','design']

console.log(randomTag(tags))

