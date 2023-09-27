import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { JobListModule } from './job-list/job-list.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, JobListModule],
  template: `
    <app-job-list></app-job-list>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
