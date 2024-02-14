import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TopicsService} from "../../services/topics.service";

@Component({
  selector: 'rm-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  topicsService = inject(TopicsService);
}
