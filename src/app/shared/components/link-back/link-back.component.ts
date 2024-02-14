import {Component, Input} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'rm-link-back',
  standalone: true,
  imports: [
    ButtonModule,
    RouterLink
  ],
  templateUrl: './link-back.component.html',
  styleUrl: './link-back.component.scss'
})
export class LinkBackComponent {
  @Input() severity?: string  = 'secondary' ;
  @Input() routeLink?: string  = '..' ;
}
