import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'soumi';
  address="Kolkata";
  f1()
  {
    alert('Hi! How are you?')
  }
  uname=new FormControl("");
  update()
  {
    this.uname.setValue("soumi");
  }

}
