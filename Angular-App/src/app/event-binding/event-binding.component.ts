import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  colorClass="red"
  showTxt = false

  showText(e:any){

    console.log(e)
    this.showTxt = !this.showTxt
  }
}
