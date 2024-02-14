import {Component, inject} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ChaptersService} from "../../../../../shared/services/chapters.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'rm-chapters-table',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    RouterLink
  ],
  templateUrl: './chapters-table.component.html',
  styleUrl: './chapters-table.component.scss'
})
export class ChaptersTableComponent {
  chapterService = inject(ChaptersService);
}
