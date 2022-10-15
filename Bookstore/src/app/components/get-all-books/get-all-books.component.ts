import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/BookService/book-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  booksList:any;
  noOfBooks:any;
  bookToView:any;
  constructor(private bookService:BookServiceService, private router:Router) { }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit(){
    this.bookService.getBookService().subscribe((response:any) => {
      this.booksList = response.data;
      this.noOfBooks = response.data.length;
      console.log("No of Books - "+this.noOfBooks);
    })
  }

  viewBook(data:any){
    this.bookToView = data
    console.log(this.bookToView);
    localStorage.setItem("bookid",data._id);
    this.router.navigateByUrl("/home/quickview");
  }

}
