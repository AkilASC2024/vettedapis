let url = "https://the-one-api.dev/v2/book"
let button = document.getElementById("clickMe")
let bookDiv = document.getElementById("book")
let bookTitle = document.getElementById("booktitle")
let subtext = document.getElementById("readit")

function getLOTRBook(event) {
    event.preventDefault()
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(myJSON){
            console.log(myJSON);

            let bookNumber = Math.floor(Math.random() * myJSON.docs.length);
            console.log(bookNumber)
            let book = myJSON.docs[bookNumber]
            let bookName = book.name

            bookTitle.innerText = bookName    

            if (myJSON.status == "error") {
                bookTitle.innerText = "Wait, what?";
                subtext.innerText = "We couldn't get your book. Try again later.";
                bookDiv.style.display = "flex";
                bookDiv.style.flexDirection = "column"
                bookDiv.style.alignItems = "center"
            }
            else {
                bookTitle.innerText = bookName
                bookDiv.style.display = "flex";
                 bookDiv.style.flexDirection = "column"
                bookDiv.style.alignItems = "center"
            }
        })
}

button.addEventListener("click", getLOTRBook);

