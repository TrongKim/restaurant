import { Component, OnInit } from '@angular/core';
import { styleUrl } from '../styleUrl';

@Component({
  selector: 'app-menu-food',
  templateUrl: './menu-food.component.html',
  styleUrls: ([...['./menu-food.component.css'], ...styleUrl])
})
export class MenuFoodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
