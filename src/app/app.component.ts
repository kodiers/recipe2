import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAo2-HABfjGNaNA0tyPuHLU9iXMp8es69k',
      authDomain: 'recipebook-b74df.firebaseapp.com'
    });
  }
}
