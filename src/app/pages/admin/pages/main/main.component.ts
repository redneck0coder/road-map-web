import {Component} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {AccordionModule} from "primeng/accordion";
import {TopicsTableComponent} from "../components/topics-table/topics-table.component";
import {ChaptersTableComponent} from "../components/chapters-table/chapters-table.component";
import {CardModule} from "primeng/card";
import {RouterLink} from "@angular/router";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    AccordionModule,
    TopicsTableComponent,
    ChaptersTableComponent,
    CardModule,
    RouterLink,
    FieldsetModule,
    PanelModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class AdminMainComponent {

}
