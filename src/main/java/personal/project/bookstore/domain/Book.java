package personal.project.bookstore.domain;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Book {

    private Long id;
    private String title;
    private String author;
    private String coverPhotoUrl;
    private Long isbnNumber;
    private Double price;
    private String language;

}
