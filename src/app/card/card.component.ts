import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  name = 'Claudia Chalandon'
  title = 'Consultant en référencement naturel';
  font = 'JosefinSans'
  tel = '06 95 89 68 66'
  email = 'c.chalandon.seeubetter@gmail.com'
  imageName = 'fed81db8-ef47-11ec-8ea0-0242ac120002.jpg'
  image = `assets/img/${this.imageName}`
  website = 'https://see-u-better.com/'
  
  ngOnInit(): void {
  }

}
