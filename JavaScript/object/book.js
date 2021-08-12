class BookLibrary{

    books = {
        "randamoozham": { book_name: "randamoozham", price: 470, author: "mt vasudhevan", avl_copies: 100, sold_copies: 100 },
        "aadujeevitham": { book_name: "aadujeevitham", price: 500, author: "benyamin", avl_copies: 150, sold_copies: 145 },
        "rainrising": { book_name: "rainrising", price: 500, author: "nirupama", avl_copies: 200, sold_copies: 140 },
        "halfgirlfirend": { book_name: "halfgirlfriend", price: 550, author: "chethan bagath", avl_copies: 150, sold_copies: 140 },
    
    }

    findBook(book_name){
        if(book_name in this.books){
            console.log(books[book_name]);
        }
        else{
            console.log("Book is not available in the library");
        }
    }
    orderBySold(){
        console.log(Object.entries(this.books).sort((b1,b2)=>b2[1].sold_copies-b1[1].sold_copies));
    }

}

var obj=new BookLibrary();
obj.orderBySold();
