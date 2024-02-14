import {Component, DoCheck, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rm-chapter',
  standalone: true,
  imports: [],
  templateUrl: './chapter.component.html',
  styleUrl: './chapter.component.scss'
})
export class ChapterComponent implements DoCheck{
  route: ActivatedRoute = inject(ActivatedRoute);
  chapter = -1;
  ngDoCheck() {
    this.chapter = Number(this.route.snapshot.params['chapter']);
  }
}
