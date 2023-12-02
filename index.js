const input = document.getElementById("name")
const btn = document.getElementsByTagName("button")[0]
const tagContainer = document.querySelector(".tags")
console.log(btn)

const addName = ()=>{
    if(input.value == ""){
        return null
    }
    console.log(input.value)
    const newTag = document.createElement("div")
    newTag.setAttribute("class", "tag")
    newTag.innerHTML = `Hey, this is ${input.value}`
    tagContainer.append(newTag)

}

btn.onclick = addName