import { Component, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet],
})
export class AppComponent implements OnInit {
  count = signal<number>(0);
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup<any>({
      counter: new FormControl<number>(0, [Validators.min(0)]),
    });
  }

  increment(): void {
    this.count.update((currentValue) => currentValue + 1);
  }

  decrement(): void {
    this.count.update((currentValue) => currentValue - 1);
  }

  onSubmit(): void {
    this.count.set(+this.form.get('counter')?.value);
  }
}

// TODO:
// https://angular.io/guide/signals
