import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})



export class VoterComponent implements AfterViewInit {
  // TODO - Observable Stream instead of DataSource
  displayedColumns: string[] = [
    'first_name',
    'middle_name',
    'last_name',
    'date_birth',
    'verified',
    'vote_status',
    'vote_online',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getVoteStatus() {

  }

  getVoteOnlineStatus() {

  }

  getAdvPoll() {

  }

}
