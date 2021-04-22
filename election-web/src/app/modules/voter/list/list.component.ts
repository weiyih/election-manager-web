import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-voter',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class VoterListComponent implements AfterViewInit {
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

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  constructor() { 


  }

  ngOnInit(): void {
  }

  getVoteStatus() {

  }

  getVoteOnlineStatus() {

  }

  getAdvPoll() {

  }

}
