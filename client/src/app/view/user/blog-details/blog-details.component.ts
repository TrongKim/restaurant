import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ([...['./blog-details.component.css'], ...styleUrl])
})
export class BlogDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
