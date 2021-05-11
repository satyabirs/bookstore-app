# To run the app
1. Start the springboot application
   a). open path upto pom.xml file in terminal
   b). run command> mvn clean install
   c). run command> mvn spring-boot:run
   To check if the app ran successfully or not, try running any of the GET calls in any rest service testing tool  
2. Start the react app react js

# Credentials

	{
		"email":"test@testmail.com",
		"password":"testpwd"
	}

# GET list of books
	http://localhost:8080/rest/books

# GET book details by id
	http://localhost:8080/rest/books/{id}

# Data Available
    {
        "id": 100,
        "title": "Spring in Action",
        "author": "Craig Walls",
        "coverPhotoUrl": "https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL.jpg",
        "isbnNumber": 9789351197997,
        "price": 630.0,
        "language": "English"
    },
    {
        "id": 101,
        "title": "Java Persistence with Hibernate",
        "author": "Christian Bauer and Gavin King",
        "coverPhotoUrl": "https://images.manning.com/720/960/resize/book/d/2ea186d-c683-4d54-95f9-cca25b6fe49e/bauer2.png",
        "isbnNumber": 9351199193,
        "price": 771.0,
        "language": "English"
    },
    {
        "id": 102,
        "title": "Spring Boot in Action",
        "author": "Craig Walls",
        "coverPhotoUrl": "https://images.manning.com/720/960/resize/book/6/bb80688-f898-4df7-838a-253b1de123c4/Walls-SpringBoot-HI.png",
        "isbnNumber": 1617292540,
        "price": 900.0,
        "language": "English"
    }

   

# Future enhancements possible
1. JWT can be used for authentication
2. Menu for adding a book
3. Registration page for new users
4. In memory DB can be used
5. Exceptional handling can be done - Optional can be used wherever null is being returned
6. Pagination
7. Adding a book
8. Updating a book