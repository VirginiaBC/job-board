import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from './job.service';
import { JobListComponent } from './job-list.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [JobListComponent],
  exports: [JobListComponent],
  providers: [JobService],
})
export class JobListModule {}
