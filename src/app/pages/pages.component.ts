import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { FooterComponent } from './shared/footer/footer.component'; // importamos el footer
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from "./shared/header/header.component";


@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterModule,
    FooterComponent, BodyComponent, HeaderComponent],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
 
}