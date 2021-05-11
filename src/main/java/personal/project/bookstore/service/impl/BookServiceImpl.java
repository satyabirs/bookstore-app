package personal.project.bookstore.service.impl;

import org.springframework.stereotype.Service;
import personal.project.bookstore.domain.Book;
import personal.project.bookstore.service.BookService;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class BookServiceImpl implements BookService {

    private Long bookId=100L;
    private Map<Long, Book> bookMap = new HashMap<>();

    {
        bookMap.put(bookId,Book.builder().id(bookId)
                .title("Spring in Action")
                .author("Craig Walls")
                .coverPhotoUrl("https://images-na.ssl-images-amazon.com/images/I/51gHy16h5TL.jpg")
                .isbnNumber(9789351197997L)
                .price(630.0)
                .language("English")
                .build());
        bookMap.put(bookId+1,Book.builder().id(bookId+1)
                .title("Java Persistence with Hibernate")
                .author("Christian Bauer and Gavin King")
                .coverPhotoUrl("https://images.manning.com/720/960/resize/book/d/2ea186d-c683-4d54-95f9-cca25b6fe49e/bauer2.png")
                .isbnNumber(9351199193L)
                .price(771.0)
                .language("English")
                .build());
        bookMap.put(bookId+2,Book.builder().id(bookId+2)
                .title("Spring Boot in Action")
                .author("Craig Walls")
                .coverPhotoUrl("https://images.manning.com/720/960/resize/book/6/bb80688-f898-4df7-838a-253b1de123c4/Walls-SpringBoot-HI.png")
                .isbnNumber(1617292540L)
                .price(900.0)
                .language("English")
                .build());
    }

    @Override
    public Collection<Book> findAll() {
        return bookMap.values();
    }

    @Override
    public Book findById(Long id) {
        return bookMap.get(id);
    }
}
