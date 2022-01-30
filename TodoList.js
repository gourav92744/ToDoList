document.getElementById("header").style.border= "solid"
document.getElementById("btn").value="Add ToDo"
// Add ToDo
let btn = document.getElementById("btn")
let items = document.getElementById("goals")
let search = document.getElementById("filter")
function addItem(){
    let item = document.getElementById("goal").value
    let li = document.createElement("li")
    let node = document.createTextNode(item)
    li.className = "list-group-item"
    let btn1 = document.createElement("button")
    btn1.appendChild(document.createTextNode("Delete"))
    btn1.className = "btn btn-danger btn-sm float-right delete"
    let btn2 = document.createElement("button")
    btn2.appendChild(document.createTextNode("Check"))
    btn2.className = "btn btn-success btn-sm float-right"
    li.appendChild(node)
    li.appendChild(btn1)
    li.appendChild(btn2)
    items.appendChild(li)
document.getElementById("goal").value=""
}
btn.addEventListener("click",addItem)
// Delete Activity
function deleteItem(e){
if(e.target.classList.contains("delete")){
    if(confirm("Sure??")){
        let li = e.target.parentElement
        items.removeChild(li)
    }
}
}
items.addEventListener("click",deleteItem)
// Search Activity
function searchItem(e){
let text = e.target.value.toLowerCase()
let items= document.getElementsByTagName("li")
let arrayList= Array.from(items)
arrayList.forEach(function(el){
let itemName=  el.firstChild.textContent.toLocaleLowerCase()
if(itemName.indexOf(text)!= -1){
    el.style.display="block"
}
else{
    el.style.display="none"
}
})

}
search.addEventListener("keyup",searchItem)
    
