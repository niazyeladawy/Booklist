var bookTitle = document.getElementById("bookTitle");
var bookAuthor = document.getElementById("bookAuthor");
var bookIsbn = document.getElementById("bookIsbn");
var bookAdded = document.getElementById("bookAdded");
var bookContainer ;

if (localStorage.getItem("bookList") == null){
    bookContainer = [];
}
else{
    bookContainer = JSON.parse(localStorage.getItem("bookList"));
    displayBook();
}

function addBook() {
    var book = {
        title: bookTitle.value,
        author: bookAuthor.value,
        isbn: bookIsbn.value
    }
    bookContainer.push(book);
    localStorage.setItem("bookList" , JSON.stringify(bookContainer))
    displayBook();
    clearBook();
    bookAdded.style.display = "block";

}

function displayBook() {
    var cartona = "";

    for (var i = 0; i < bookContainer.length; i++) {
        cartona += `
            <tr>
                <td>${bookContainer[i].title}</td>
                <td>${bookContainer[i].author}</td>
                <td>${bookContainer[i].isbn}</td> 
                <td><button class="btn ms-auto d-block btn-transparent" onclick="removeBook(${i})"><i class="fas fa-times"></i></button></td>
            </tr>
        `
    }
    document.getElementById("tablebody").innerHTML = cartona;
}

function removeBook(index){
    bookContainer.splice(index,1);
    localStorage.setItem("bookList" , JSON.stringify(bookContainer));
    displayBook();
}

function clearBook(){
    bookTitle.value = "";
    bookAuthor.value = "";
    bookIsbn.value = "";
}

function clearAllBooks(){
    bookContainer = [];
    localStorage.setItem("bookList" , JSON.stringify(bookContainer));
    displayBook();
}

bookTitle.addEventListener("click", function(){
    bookAdded.style.display = "none";
});


const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});