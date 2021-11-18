import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits=[

    {
      nom: "Scandal",
      photo:"https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwb9be8783/images/hi-res/SKU/SKU_5/400032_swatch.jpg",
      description: "Le nez poivré, un ton floral",
      marque: "Jean-Paul Gauthier",
      prix: 100,
      contenance: 100
    },
    {
      nom: "Opium",
      photo:"https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw615f95c1/images/hi-res/SKU/SKU_1/195939_swatch.jpg",
      description: "Musqué et ambré",
      marque: "Yves Saint Laurent",
      prix: 130,
      contenance: 90
    },
    {
      nom: "Boss",
      photo:"https://www.sephora.fr/dw/image/v2/BCVW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw16d80464/images/hi-res/SKU/SKU_6/60742_swatch.jpg?sw=585&sh=585&sm=fit",
      description: "Musqué, affirme toute la puissance de l'homme",
      marque: "Hugo Boss",
      prix: 50,
      contenance: 50
    },
    {
      nom: "Rive gauche",
      photo:"https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw9ddb21ba/images/hi-res/SKU/SKU_6/55975_swatch.jpg",
      description: "Léger, poudré",
      marque: "Yves Saint Laurent",
      prix: 130,
      contenance: 90
    },
    {
      nom: "Channel N°5",
      photo:"https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw1f81ee04/images/hi-res/SKU/SKU_6/60423_swatch.jpg",
      description: "Puissant et floral",
      marque: "Channel",
      prix: 180,
      contenance: 100
    }



  ]

  panier= Array();
  quantite=0;

  ajoutPanier(parfum: object, nom: string){
    //le panier est totalement vide
    if(this.panier.length ==0)
    {

      this.panier.push(parfum);
      this.panier[0].quantite=1;
      this.quantite +=1;

    }else{ //il y a au moins un parfum dans le panier

      //si le parfum que l'on souhaite ajouter est déjà dedans
      if(this.panier.includes(parfum))
      {

        for(var i=0; i<this.panier.length; i++)
        {

          if(nom== this.panier[i].nom)
          {
            this.panier[i].quantite +=1;
            this.quantite +=1;
          }
        }



      }else{ // si ce parfum n'est pas présent dans le panier

        this.panier.push(parfum);
        this.panier[this.panier.length - 1].quantite=1;
        this.quantite+=1;
      }

    }

    console.log(this.panier);

  }

  retraitPanier(nom: string){

    for(var i=0; i<this.panier.length; i++)
    {
      if(nom== this.panier[i].nom)
      {
        if(this.panier[i].quantite == 1) //si quantite égale à 1 on supprime
        {
          this.panier.splice(i,1);
        }else{
          this.panier[i].quantite -=1; //si quantite superieur on décrémente
        }
      }
    }

    this.quantite-=1;
  }

  total(){
    var total=0;

    this.panier.forEach(function(parfum)
    {
      total +=parfum.prix*parfum.quantite;
    }
    );
    return total;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
