import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";
import {TopicsService} from "../../../../shared/services/topics.service";
import {FormsModule} from "@angular/forms";
import {LinkBackComponent} from "../../../../shared/components/link-back/link-back.component";

@Component({
  selector: 'rm-chapter',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule,
    LinkBackComponent
  ],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class AdminChapterComponent {
  topicService = inject(TopicsService);
  selectedTopic: {id: number, name: string} | undefined;
  text: string = '';
}
