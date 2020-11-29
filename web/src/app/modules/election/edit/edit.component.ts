import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Election } from '@app/model/election';
import { Candidate } from '@app/model/candidate';
import { AuthService } from '@core/auth/authentication.service';
import { ElectionService } from '@services/election.services';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ElectionService],
})
export class EditComponent implements OnInit {
  electionForm: FormGroup;
  loading = false;
  submitted = false;

  election: Observable<Election>;
  electionId: string;

  constructor(
    private electionServices: ElectionService,

    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
  ) {
    // TODO - Navigate if authenticated
  }

  ngOnInit(): void {
    // Retrieve election id from ParamMap
    this.router.queryParams.subscribe(params => {
      this.electionId = params.id;
    });

    // this.loadElection(this.electionId);

    // Election Form
    // TODO - Populate based on the observed election object
    this.electionForm = this.formBuilder.group({
        // election_id: [null, Validators.required],
        election_name: [null, Validators.required],
        election_start_date: [null, Validators.required],
        election_end_date: [null, Validators.required],
        advanced_polling: [null, Validators.required],
        advanced_start_date: [null, Validators.required],
        advanced_end_date: [null, Validators.required],
        channel_name: [null, Validators.required],
        contract_name: [null, Validators.required],
        // created_at: [null, Validators.required],
        // updated_at: [null, Validators.required],
        // locked: [null, Validators.required], // 0 - unlocked(editable), 1 - locked(not running/in progress/completed)
        // progress: [null, Validators.required], // 0 - not running, 1 - in progress, 2 - completed
        // disabled: [null, Validators.required], // 0 - deleted election, 1 - valid election
    });

    // electionName


  }


  // Retrieves elections from DB and sets the datasource
  // Ensures the most up to date information
  private loadElection(electionId): void {
    console.log('LOADING...');
    this.electionServices.getElection(electionId).subscribe((election) => {
      console.log(election);
      this.election = election;
    });
  }

  // Convenience getter to access form fields
  // tslint:disable-next-line: typedef
  get form() {
    return this.loginForm.controls;
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
