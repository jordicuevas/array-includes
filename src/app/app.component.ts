import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-app';

  constructor() {

  }
  ngOnInit() {
    let paises = ["Venezuela", "Colombia", "Brasil"];
    let exits = paises.includes("Argentina"); //returns false
    console.log(`El pais existe: ${exits}`);
  }
}
