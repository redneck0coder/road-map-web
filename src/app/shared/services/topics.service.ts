import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  topics = [
    {id: 0, name: 'html'},
    {id: 1, name: 'css'},
    {id: 2, name: 'js'},
  ]

  constructor() { }

  getAll() {
    return this.topics;
  }

  getTopicById(id: number) {
    return this.topics.find(t => t.id === id);
  }

  create(name: string){
    this.topics.push({id: Date.now(), name})
  }

  edit(topic: any){
    this.topics.map(t => t.id === topic.id ? t.name = topic.name : t)
  }

  delete(topic: any) {
    this.topics = this.topics.filter(t => t.id !== topic.id);
  }
}
