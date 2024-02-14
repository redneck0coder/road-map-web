import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {TopicsService} from "../../../../../shared/services/topics.service";
import {Dialog, DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'rm-topics-table',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './topics-table.component.html',
  styleUrl: './topics-table.component.scss'
})
export class TopicsTableComponent implements OnInit{
  @ViewChild('dialog') dialog!: Dialog;

  topicService = inject(TopicsService);
  visibleModal = false;
  editDialog: boolean = false;
  topicId: number = 0;
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl<string | null>(null),
      description: new FormControl<string[] | null>(null),
    });
  }

  showDialog() {
    this.visibleModal = true;
  }

  createTopic(event: any) {
    this.topicService.create(this.formGroup.value.name);
    this.dialog.close(event);
    this.clearFormGroup();
  }

  editTopic(event: any) {
    this.topicService.edit({id: this.topicId, ...this.formGroup.value});
    this.editDialog = false;
    this.visibleModal = false;
  }

  protected clearFormGroup() {
    this.formGroup.reset();
  }

  edit(topic: any) {
    this.topicId = topic.id;
    this.editDialog = true;
    this.visibleModal = true;
    this.formGroup.patchValue({
      name: topic.name,
      description: topic.description
    });
  }

  delete(topic: any) {
    this.topicService.delete(topic)
  }
}
