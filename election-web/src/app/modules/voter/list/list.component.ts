import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Voter } from '@app/model/voter';
import { VoterService } from '@services/voters.services';


@Component({
  selector: 'app-voter',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [VoterService],
})

export class VoterListComponent implements AfterViewInit {
  // TODO - Observable Stream instead of DataSource
  displayedColumns: string[] = [
    'name',
    'date_birth',
    'verify_pin',
    'verify_status',
    'vote_online',


  ];

  voterDataSource: Voter[] = [];

  constructor(private voterServices: VoterService) {

  }

  ngAfterViewInit(): void {
    this.setDataSource();
  }

  // Retrieves elections from DB and sets the datasource
  private setDataSource(): void {
    this.voterServices.getVoters().subscribe((voter) => {
      this.voterDataSource = voter;
    });
  }

  getVoterName(voter: Voter) {
    return `${voter.first_name} ${voter.middle_name} ${voter.last_name}`
  }

  getVoteOnlineStatus() {

  }
}
