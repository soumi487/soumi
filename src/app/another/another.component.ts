import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit{
  ngOnInit() {
    alert('I am oninit');
  }
  
  constructor()
  {
    alert('I amm constructor');
  }
  name='SOUMI';
  salary=22000;
  jd='7/01/2023';
fruits=
[
  {name:'apple',price:22,stock:130},
  {name:'orange',price:24,stock:330},
  {name:'mango',price:28,stock:139},
];
}


