import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { User } from '@app/model/user';
import { VoterService } from '@services/voters.services';


@Component({
  selector: 'app-user',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [VoterService],
})

export class UserListComponent implements AfterViewInit {
  // TODO - Observable Stream instead of DataSource
  displayedColumns: string[] = [
    'user',
    'email',
    'email_verified',
    'verified_status',
  ];

  userDataSource: User[] = [];

  constructor(private voterServices: VoterService) {


  }
  ngAfterViewInit(): void {
    this.setDataSource();
  }

  // Retrieves elections from DB and sets the datasource
  private setDataSource(): void {
    console.log('LOADING...');
    this.voterServices.getUsers().subscribe((userList) => {
      this.userDataSource = userList;
    })
    // this.electionServices.getAllElections().subscribe((election) => {
    //   this.electionDataSource = election;
    // });
  }

  getName(user: User) {
    return `${user.first_name} ${user.middle_name} ${user.last_name}`
  }
}


