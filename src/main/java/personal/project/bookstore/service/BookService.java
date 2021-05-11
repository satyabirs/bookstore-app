package personal.project.bookstore.service;

import personal.project.bookstore.domain.Book;

import java.util.Collection;

public interface BookService {

    Collection<Book> findAll();
    Book findById(Long id);
}
