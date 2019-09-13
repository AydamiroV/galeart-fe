import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  fullName: string
  email: string;
  message: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
      this.fullName = '';
      this.email = '';
      this.message = '';
  }

  submit() {
      this.http.post("/api/contact",
          {
              fullName: this.fullName,
              email: this.email,
              message: this.message
          }
      )
      .subscribe(
          (data) => {
              console.log("POST Request is successful ", data);
          },
          (error) => {
            console.log("Error", error);
          }
      );
  }
}
