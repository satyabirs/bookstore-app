# Brief about the project
Bookstore app lists down all the books in the db. The details for an individual book can also be seen. 

The main focus was in developing the front end. The back end is just to support the end to end flow of the project.
Login credentials(mentioned below) are hard coded for accepting only one user for now.

# To run the app
1. Start the springboot application
   a). open path upto pom.xml file in terminal
   b). run command> mvn clean install
   c). run command> mvn spring-boot:run
   To check if the app ran successfully or not, try running any of the GET calls in any rest service testing tool  
2. Start the react app react js
    Note : node and npm should be pre-installed before moving to the step a)
    a). open path upto 'src/main/webapp/reactjs' in terminal
    b). run command> npm install
    c). run command> npm start
    Once the app opens in browser, it can be explored.
    
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
2. DB can be used
3. Pagination
4. Adding unit test cases for both front and back end