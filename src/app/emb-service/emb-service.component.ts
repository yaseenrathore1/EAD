import { Component } from '@angular/core';

@Component({
  selector: 'app-emb-service',
  standalone: true,
  imports: [],
  templateUrl: './emb-service.component.html',
  styleUrl: './emb-service.component.css'
})
export class EmbServiceComponent {
  main:boolean = true
  format:boolean = false
  turn:boolean = false
  price:boolean = false
  gallery:boolean = false
  order:boolean = false

  mainClicked: boolean = true;
  formatClicked: boolean = false;
  turnClicked:boolean = false;
  priceClicked:boolean = false;
  galleryClicked:boolean = false;
  orderClicked:boolean = false;


  toggleMain() {
    this.main = true;
    this.format = false;
    this.turn = false;
    this.price = false;
    this.gallery = false;
    this.order = false;

    this.mainClicked = true;
    this.formatClicked = false;
    this.turnClicked = false;
    this.priceClicked = false;
    this.galleryClicked = false;
    this.orderClicked = false;

  }

  toggleFormat() {
    this.main = false;
    this.format = true;
    this.turn = false;
    this.price = false;
    this.gallery = false;
    this.order = false;

    this.mainClicked = false;
    this.formatClicked = true;
    this.turnClicked = false;
    this.priceClicked = false;
    this.galleryClicked = false ;
    this.orderClicked = false;
  }
  toggleTurn(){
    this.main = false;
    this.format = false;
    this.turn = true;
    this.price = false;
    this.gallery = false;
    this.order = false;

    this.mainClicked = false;
    this.formatClicked = false;
    this.turnClicked = true;
    this.priceClicked = false;
    this.galleryClicked = false ;
    this.orderClicked = false;

  }
  togglePrice(){
    this.main = false;
    this.format = false;
    this.turn = false;
    this.price = true;
    this.gallery = false;
    this.order = false;


    this.mainClicked = false;
    this.formatClicked = false;
    this.turnClicked = false;
    this.priceClicked = true;
    this.galleryClicked = false ;
    this.orderClicked = false;

  }
  togglegall(){
    this.main = false;
    this.format = false;
    this.turn = false;
    this.price = false;
    this.gallery = true;
    this.order = false;

    this.mainClicked = false;
    this.formatClicked = false;
    this.turnClicked = false;
    this.priceClicked = false;
    this.galleryClicked = true ;
    this.orderClicked = false;
  }

  toggleOrder(){
    this.main = false;
    this.format = false;
    this.turn = false;
    this.price = false;
    this.gallery = false;
    this.order = true;

    this.mainClicked = false;
    this.formatClicked = false;
    this.turnClicked = false;
    this.priceClicked = false;
    this.galleryClicked = false ;
    this.orderClicked = true;
  }


}
