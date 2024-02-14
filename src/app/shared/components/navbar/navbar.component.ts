import {Component, DoCheck, inject} from '@angular/core';
import {ChaptersService} from "../../services/chapters.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'rm-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements DoCheck {
  route: ActivatedRoute = inject(ActivatedRoute);
  chaptersService = inject(ChaptersService);

  topic = '';

  ngDoCheck() {
    this.topic = this.route.snapshot.params['topic'];
  }
}
