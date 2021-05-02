import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ballot } from '@app/model/ballot';
import { Vote } from '@app/model/vote';
import { ElectionService } from '@services/election.services';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [ElectionService],
})
export class ResultComponent implements AfterViewInit {
  candidateColumns: string[] = [
    'candidate',
    'votes'
  ]

  displayedColumns: string[] = [
    'id',
    // 'district_id',
    'candidate_id',
    'timestamp'
  ];

  electionId: string;
  voteDataSource: Vote[] = [];
  ballotDataSource: Ballot;
  electionResult = [];
  candidateMap: Object = {};

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
    this.electionServices.queryAllCandidates(this.electionId).subscribe((districtBallots) => {
      this.ballotDataSource = districtBallots;
      this.makeCandidateMap();
    });

    this.electionServices.queryAllVotes(this.electionId).subscribe((votes) => {
      this.voteDataSource = votes;
      this.tabulateResults();
    });
  }

  // Create a map candidate_id: candidate_name map object
  private makeCandidateMap() {
    var districtList = this.ballotDataSource.districts;
    for (const district of districtList) {
      for (const candidate of district.candidates) {
        this.candidateMap[candidate.candidate_id] = candidate.candidate_name;
      }
    }
  }

  displayName(candidateId): string {
    if (this.candidateMap.hasOwnProperty(candidateId)) {
      return this.candidateMap[candidateId]
    }
    return "NO NAME"
  }

  getTotalVotes(district) {
    return district.results.map(cand => cand.votes).reduce((acc, val) => acc + val);
  }

  getDataSource(data) {
    return data.results;
    // return null;
  }

  private tabulateResults() {
    var districtList = this.ballotDataSource.districts;

    for (const district of districtList) {
      let districtResult = new Object()
      districtResult['district_id'] = district.district_id;
      districtResult['district_name'] = district.district_name;

      // Loop through candidates and tally

      let voteResults = new Array()
      for (const candidate of district.candidates) {
        let result = new Object()
        result['candidate_name'] = candidate.candidate_name;

        let votes = this.voteDataSource.filter((vote) => vote.candidate_id == candidate.candidate_id)
        result['votes'] = votes.length
        voteResults.push(result)
      }
      districtResult['results'] = voteResults;
      this.electionResult.push(districtResult);
    }
  }
}

// export interface ElectionResult {
//   district_id: string
//   district_name: string
//   results: CandidateResult[]
// }

// export interface CandidateResult {
//   candidate_name: string
//   total_votes: number
// }