import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() cont: number | undefined;
  @Input() desc: string | undefined;

  affichage=false;
  contenue="Voir +";

  affich(){

    if(this.affichage == false){

      this.affichage=true;
      this.contenue="Voir -"
      setTimeout(
        ()=>{
          this.affichage=false;
        }, 5000
      )
    }else{

      this.affichage=false;
      this.contenue="Voir +";

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
