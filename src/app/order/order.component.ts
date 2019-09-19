import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  processFile(imageInput: any){
    debugger;
    const file: File = imageInput.files[0];
  }
  constructor() { }

  ngOnInit() {
  }

}
