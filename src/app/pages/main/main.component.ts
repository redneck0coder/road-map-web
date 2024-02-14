import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {CardModule} from "primeng/card";
import {TopicsService} from "../../shared/services/topics.service";

@Component({
  selector: 'rm-main',
  standalone: true,
  imports: [
    RouterOutlet,
    CardModule,
    RouterLink
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  topicService = inject(TopicsService);

}
