import {Component, OnInit} from '@angular/core';
import {TriStateCheckboxModule} from "primeng/tristatecheckbox";
import {CardModule} from "primeng/card";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    TriStateCheckboxModule,
    CardModule,
    ReactiveFormsModule,
    ChipsModule,
    InputGroupModule,
    InputGroupAddonModule,
    PanelModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl<string[] | null>(null),
      password: new FormControl<string[] | null>(null),
    });
  }
}
