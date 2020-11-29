import { Component, OnInit } from '@angular/core';
import { Election } from '@app/model/election';
import { ElectionService } from '@services/election.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ ElectionService ]
})
export class ListComponent implements OnInit {



  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  // TODO - providing data to the table is by passing an Observable stream
  electionDataSource: Election[];

  // DI ElectionServices
  constructor(private electionServices: ElectionService) { }

  ngOnInit(): void {
    this.setDataSource();

  }

  // Retrieves elections from DB and sets the datasource
  private setDataSource(): void {
    this.electionServices.getElections()
      .subscribe(election => this.electionDataSource = election);
  }
}
