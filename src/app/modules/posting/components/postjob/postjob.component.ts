import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms'

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  postJobFrom: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // build form
    this.buildForm();
  }

  buildForm(): void {
    this.postJobFrom = this.fb.group({
      recruiter: this.buildRecruiter(),
      jobDetails: this.fb.array(this.buildJobDetails())
    });
  }

  get jobDetails(): FormArray {
    return <FormArray>this.postJobFrom.get('jobDetails');
  }
  buildRecruiter(): FormGroup {
    return this.fb.group({
      recruiterName: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      emailId: ['', Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],
    });
  }

  buildJobDetails(): FormGroup[] {
    let i: number;
    let jobDetails: FormGroup[] = [];
    for (i = 0; i < 1; i++) {
      jobDetails.push(this.buildJobDetail());
    }
    return jobDetails;
  }

  buildJobDetail() {
    return this.fb.group({
      jobTitle: ['', Validators.required],
      jobLocation: ['', Validators.required],
      client: [''],
      rate: ['', Validators.required]
    });
  }

  isValidrecruiterName(): boolean {
    let recruiterName: AbstractControl = this.postJobFrom.get('recruiter.recruiterName');
    if ((recruiterName.touched || recruiterName.dirty) && (recruiterName.invalid)) {
      return false;
    }
    return true;
  }

  isValidMobileNumber(): boolean {
    let mobileNumber: AbstractControl = this.postJobFrom.get('recruiter.mobileNumber');
    if ((mobileNumber.touched || mobileNumber.dirty) && (mobileNumber.invalid)) {
      return false;
    }
    return true;
  }

  isValidEmailId(): boolean {
    let emailId: AbstractControl = this.postJobFrom.get('recruiter.emailId');
    if ((emailId.touched || emailId.dirty) && (emailId.invalid)) {
      return false;
    }
    return true;
  }

  isJobTitleValid(index: number) {
    let jobTitle: AbstractControl = this.jobDetails.controls[index].get('jobTitle');
    if ((jobTitle.touched || jobTitle.dirty) && (jobTitle.invalid)) {
      return false;
    }
    return true;

  }

  isLocationValid(index: number) {
    let jobLocation: AbstractControl = this.jobDetails.controls[index].get('jobLocation');
    if ((jobLocation.touched || jobLocation.dirty) && (jobLocation.invalid)) {
      return false;
    }
    return true;

  }

  isRateValid(index: number) {
    let rate: AbstractControl = this.jobDetails.controls[index].get('rate');
    if ((rate.touched || rate.dirty) && (rate.invalid)) {
      return false;
    }
    return true;

  }

  addJob(): void {
    this.jobDetails.push(this.buildJobDetail());
  }

  removeJob(index: number): void {
    console.log(index);
    if (index != 0) {
      this.jobDetails.removeAt(index);
    }
  }

  resetForm(): void {
    this.buildForm();
  }

  isFormValid(): boolean{
    return true;
  }

  submit(): void{
    console.log(this.postJobFrom.value);
  }
}
