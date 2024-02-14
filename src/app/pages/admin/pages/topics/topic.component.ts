import {Component} from '@angular/core';
import {InputTextareaModule} from "primeng/inputtextarea";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {TopicsTableComponent} from "../components/topics-table/topics-table.component";
import {RouterLink} from "@angular/router";
import {LinkBackComponent} from "../../../../shared/components/link-back/link-back.component";

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [
    InputTextareaModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    TopicsTableComponent,
    RouterLink,
    LinkBackComponent
  ],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class AdminTopicComponent {

}
