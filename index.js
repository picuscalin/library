const myLibrary = [];


class Book{
    constructor(title,author,pageCount,read){
        this.title=title,
        this.author=author,
        this.pageCount=pageCount,
        this.read=read
    }
}

function displayBooks(){
    myLibrary.forEach((element)=>{
        const card=document.createElement("div")
        card.innerHTML="<p>dsdadasd<p>"
        document.body.appendChild(card)
    })
}

function showModal(){
    const dialog=document.querySelector(".dialog")
    const close=document.querySelector(".close")
    const open=document.querySelector(".open")
    open.addEventListener("click",()=>{
        dialog.showModal()
    })
    close.addEventListener("click",()=>{
        dialog.close()
    })
}

function addBookToLibrary() {
    const title="asdasd"
    const author="dasdas"
    const pageCount=3
    const read=true
  myLibrary.push(new Book(title,author,pageCount,read))
  displayBooks()
  
}
addBookToLibrary()