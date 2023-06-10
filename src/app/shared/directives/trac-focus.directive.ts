import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appTracFocus]',
  standalone: true,
})
export class TracFocusDirective {
  @HostBinding('class.focused-element') isFocused: boolean = false;

  @HostListener('focus', ['$event']) onFocus(_$event: FocusEvent): void {
    this.isFocused = true;
  }

  @HostListener('blur', ['$event']) onBlur(_$event: FocusEvent): void {
    this.isFocused = false;
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent($event: KeyboardEvent): void {
    if (!this.isFocused) {
      return;
    }

    if ($event.key === 'Enter') {
      $event.preventDefault();
      this.actionOnEnterPress.emit();
    }
  }

  @Output()
  actionOnEnterPress = new EventEmitter<void>();

  constructor() {}
}
