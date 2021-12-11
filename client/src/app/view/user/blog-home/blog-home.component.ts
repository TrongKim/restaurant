import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ([...['./blog-home.component.css'], ...styleUrl])
})
export class BlogHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
