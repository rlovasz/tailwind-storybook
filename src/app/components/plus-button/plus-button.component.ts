import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-plus-button',
  templateUrl: './plus-button.component.html',
  styleUrls: ['./plus-button.component.scss'],
  imports: [CommonModule]
})
export default class PlusButtonComponent {
  @Input() disabled: boolean = false;
  @Input() type: string = 'submit'
}
