import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Election } from '@app/model/election';
import { Candidate } from '@app/model/candidate';
import { ElectionService } from '@services/election.services';
import * as moment from 'moment';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ElectionService],
})
export class EditComponent implements OnInit {

  electionForm: FormGroup;
  candidateForm: FormGroup;

  loading = false;
  submitted = false;

  // Election Object
  election: Election;
  electionId: string;
  minEndDate: Date;

  constructor(
    private electionServices: ElectionService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {


    // Currently send the minEndDate to be at least 1 day
    const currentDate = moment();
    this.minEndDate = currentDate.add(1, 'day').toDate();
  }

  ngOnInit(): void {
    this.electionId = this.route.snapshot.params.id;
    this.loadElection(this.electionId);

    this.electionForm = this.formBuilder.group({
      election_name: ['' , Validators.required],
      // election_name: [election.election_name ],
      election_start_date: [''],
      election_end_date: ['' ],
      advanced_start_date: ['' ],
      advanced_end_date: ['']
    });
  }

  // Retrieves elections from DB
  // Ensures the most up to date information
  private loadElection(electionId: string): void {
    console.log('LOADING...');
    this.electionServices.getElection(electionId)
      .subscribe( election => {
        this.election = election;
        console.log(election);

        // Update the form from retrieved election;
        this.electionForm.patchValue(election) ;
    });
  }

  // Convenience getter to access form fields
  // tslint:disable-next-line: typedef
  get form() {
    return this.electionForm.controls;
  }

  // Login
  // tslint:disable-next-line: typedef
  onSubmit() {
    // Validate form
    if (this.electionForm.invalid) {
      return;
    }

    // validate candidates
  }
}
