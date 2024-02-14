import {Component, DoCheck, inject} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'rm-topics',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent implements  DoCheck{
  route: ActivatedRoute = inject(ActivatedRoute);
  topic = '';
  description: string = 'Many text about technology';

  ngDoCheck() {
    this.topic = this.route.snapshot.params['topic'];
  }

}
