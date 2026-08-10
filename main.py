#Library Management System

class library:
    def __init__(self,books):
        self.books = books 

    def display_books(self):
        print("\n Available Books: ")

        for book in self.books:
            print("--", book)

    def return_book(self, book):
        self.books.append(book)
        print("\n Thank you for returning the book!")

    def borrow_book(self, book, name):
        if book in self.books:
            self.books.remove(book)
            print("\n Book has been issued to ", name)
        else: 
            print("\n Sorry the book is not available right now.")

    def donate_book(self, book):
        self.books.append(book)
        print("\n Thank you for donanting the book, Have a great day!")


books = [ "The phsycology of money", "Coffee can investing", "How to win friends andd influence people", 
         "Rich dada poor dad", "The way of a superior man", "The hound of the baskervilles", "The alchemist", "The subtle art of not giving a f*ck",
         "The 48 laws of power", "The art of war", "The monk who sold his ferrari", "The power of your subconscious mind", "The 5 am club", "The 7 habits of highly effective people", 
         "The magic of thinking big", "The secret", "The one thing", "The millionaire fastlane", "The intelligent investor", "The rich dad's guide to investing"]

library = library(books)

while True:
    print("\n ====== Welcome to the College Library ======")
    print("1. Display available books"
          "\n 2. Borrow a book"
          "\n 3. Return a book" \
          "\n 4. Donate a book" \
          "\n 5. Exit the library")
    

    choice = int(input("Please enter your choice: "))

    if choice == 1:
        library.display_books()

    elif choice == 2:
        name = input("Please enter your name: ")
        book = input("Please enter the name of the book you want to borrow: ")
        library.borrow_book(book, name)

    elif choice == 3:
        book = input("Please enter the name of the book you want to return: ")
        library.return_book(book)

    elif choice == 4:
        book = input("Please enter the name of the book you want to donate: ")
        library.donate_book(book)
        print("\n Thank you for donating the book, Have a great day!")

    elif choice == 5:
        print("Thank you for visiting the library. Have a great day!")
        break

    else: 
        print("INVALID CHOICE! ")
    

        