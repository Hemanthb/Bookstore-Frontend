import { Component, OnInit, Input } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
@Component({
  selector: 'app-quick-view-book',
  templateUrl: './quick-view-book.component.html',
  styleUrls: ['./quick-view-book.component.scss']
})
export class QuickViewBookComponent implements OnInit {
  @Input() bookid:any;
  getBookById:any;
  qty:any;
  stars=0;
  bookId = localStorage.getItem('bookid');
  constructor(private bookService:BookServiceService) { }

  ngOnInit(): void {
    console.log(this.bookid);
    this.getBook();
  }
  getBook() {
    this.bookService.getBookById(this.bookId).subscribe((response: any) => {
      this.getBookById = response.data;
      this.qty = response.length;
      console.log(this.bookId)
      console.log(this.getBookById);
    })
  }
}
