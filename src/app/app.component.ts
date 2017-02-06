import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  isEnabled = false;

  ngOnInit() {

    let target, mousedown;

    target = document.querySelector('body');

    mousedown = Observable.fromEvent(target, 'mousedown');

    mousedown.subscribe((x) => {
      console.log('onNext: ', x);
      this.isEnabled = true;
    });

  }
}
