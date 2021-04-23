import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Vote } from '@app/model/vote';
import { ElectionService } from '@services/election.services';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ElectionService],
})
export class ResultComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'district_id',
    'candidate_id',
    'timestamp'
  ];

  electionId: string;
  voteDataSource: Vote[] = [];

  // DI ElectionServices
  constructor(
    private electionServices: ElectionService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // Retrieve election_id from url;
    this.electionId = this.route.snapshot.params.id;
    console.log(this.route.snapshot.params.id);

  }

  ngAfterViewInit(): void {
    this.setDataSource();
  }

  // Retrieves all votes from blockchain and sets the datasource
  private setDataSource(): void {
    console.log('LOADING...');
    this.electionServices.queryAllVotes(this.electionId).subscribe((votes) => {
      this.voteDataSource = votes;
    });
  }
}