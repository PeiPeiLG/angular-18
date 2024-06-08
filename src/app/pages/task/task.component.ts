import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent { }
