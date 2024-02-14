import { Component } from '@angular/core';
import {ChaptersTableComponent} from "../components/chapters-table/chapters-table.component";
import {LinkBackComponent} from "../../../../shared/components/link-back/link-back.component";

@Component({
  selector: 'rm-chapters',
  standalone: true,
  imports: [
    ChaptersTableComponent,
    LinkBackComponent
  ],
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.scss'
})
export class AdminChaptersComponent {

}
