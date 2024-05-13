import { Component,  OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CatogoryBtnsComponent } from './catogory-btns/catogory-btns.component';
import { CatogoryCardsComponent } from './catogory-cards/catogory-cards.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CarouselComponent,CatogoryBtnsComponent,CatogoryCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
   