 // book constructer 
 function Book(title,author,isbn){
  this.title = title
  this.author = author
  this.isbn = isbn
 }


 //UI Constructer
function UI(){
UI.prototype.addBookToList = function (book){
  const list = document.getElementById('book-list')
  const row = document.createElement('tr')
 row.innerHTML= `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
 `
 list.appendChild(row)
}
}
UI.prototype.clearFields = function(){
    const title = document.getElementById('title').value = '',
      author = document.getElementById('author').value = '',
      isbn = document.getElementById('isbn').value = ''
}

UI.prototype.showAlert = function(message,className){
 const div = document.createElement('div')
 div.className = `alert ${className}`
 div.appendChild(document.createTextNode(message))
 const container = document.querySelector('.container')
 const form = document.querySelector('#book-form')
 container.insertBefore(div,form)

 setTimeout(function(){
    document.querySelector('.alert').remove()
 },2000)
}

UI.prototype.deleteBook = function(target){
if(target.className === 'delete'){
  target.parentElement.parentElement.remove()
}
}

//Event listners
document.getElementById('book-form').addEventListener('submit',function(e){
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value


const book = new Book(title,author,isbn)
const ui = new UI()
 if(title === '' || author === '' || isbn === ''){
 ui.showAlert('please fill in all fields','error')
 e.preventDefault()
 }else{
ui.addBookToList(book)
ui.clearFields()
ui.showAlert('Book has been added', 'success')
e.preventDefault()
}})

document.getElementById('book-list').addEventListener('click',function(e){
 const ui = new UI()
 ui.deleteBook(e.target)
 ui.showAlert('book has been romoved','success')
e.preventDefault()
})