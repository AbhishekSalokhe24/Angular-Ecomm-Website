import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { CardComponent } from '../card/card.component';
import { CatogoryBtnsComponent } from "../catogory-btns/catogory-btns.component";

@Component({
    selector: 'app-catogory-cards',
    standalone: true,
    templateUrl: './catogory-cards.component.html',
    styleUrl: './catogory-cards.component.css',
    imports: [CommonModule, CardComponent, CatogoryBtnsComponent]
})
export class CatogoryCardsComponent implements OnInit{


  products: any[] | undefined;
newdata: any[]|undefined;
  

  ngOnInit(): void {
    this.getProducts();
  }

 
  constructor(private productSev:  ProductsService){
    
  }
  updateProducts(updatedProducts: any[]) {
    this.products = updatedProducts;
  }
  
  getProducts(): void {
    this.productSev.getProducts().subscribe((res: any) => {
      this.products = res;
      //console.log("Data From App component:");
      //console.log(this.products);
      this.products?.forEach((item) =>{
      // console.log("Title: ", item.title);

      })
    });

  
 
}
}