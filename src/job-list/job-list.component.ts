import { Statement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  startIndex = 0;
  endIndex = 6;
  jobs: any[] = [];
  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs(): void {
    this.jobService.getJobIds().subscribe((ids) => {
      let jobsToLoad = ids.slice(this.startIndex, this.endIndex);

      for (let id of jobsToLoad) {
        this.jobService.getJobDetails(id).subscribe((job) => {
          this.jobs.push(job);
        });
      }
    });
  }

  loadMore(): void {
    this.startIndex = this.endIndex;
    this.endIndex += 6;
    this.loadJobs();
  }
}
