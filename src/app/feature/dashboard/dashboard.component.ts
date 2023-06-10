import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../core/models/task';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TracFocusDirective } from '../../shared/directives/trac-focus.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ButtonModule,
    TracFocusDirective,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  tasks = signal<Task[]>([
    {
      body: 'test 1',
      creationDate: new Date(),
    },
    {
      body: 'test 2',
      creationDate: new Date(),
    },
  ]);
  form = new FormGroup({
    taskBody: new FormControl<string>('', [Validators.required]),
  });

  constructor() {}

  onClear(): void {
    this.form.reset();
  }

  onSubmit(): void {
    if (!this.form.get('taskBody')?.value) {
      return;
    }

    this.tasks.update((currentTasks) => [
      {
        body: this.form.get('taskBody')!.value!.toString(),
        creationDate: new Date(),
      },
      ...currentTasks,
    ]);

    this.form.reset();
  }
}
