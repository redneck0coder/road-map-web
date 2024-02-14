import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {TopicComponent} from "./pages/topic/topic.component";
import {ChapterComponent} from "./pages/chapter/chapter.component";
import {LoginComponent} from "./pages/login/login.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AdminTopicComponent} from "./pages/admin/pages/topics/topic.component";
import {AdminChapterComponent} from "./pages/admin/pages/chapter/chapter.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AdminMainComponent} from "./pages/admin/pages/main/main.component";
import {AdminChaptersComponent} from "./pages/admin/pages/chapters/chapters.component";

export const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminMainComponent },
      { path: 'topic', component: AdminTopicComponent },
      { path: 'chapter-create', component: AdminChapterComponent },
      { path: 'chapters', component: AdminChaptersComponent },
    ]
  },
  { path: ':topic', component: TopicComponent, children: [
      { path: ':chapter', component: ChapterComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];
