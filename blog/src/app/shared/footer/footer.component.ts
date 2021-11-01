import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
