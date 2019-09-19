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
      this.fullName = 'Namaz Gurbanov';
      this.email = 'namaz.gurbanov@yahoo.com';
      this.message = 'Hello World!';
  }

  submit() {
      this.http.post("/api/contact",
          {
              name: this.fullName,
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
