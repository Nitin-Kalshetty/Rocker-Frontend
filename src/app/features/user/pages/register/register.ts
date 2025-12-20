import {ChangeDetectorRef, Component, EventEmitter, Output} from '@angular/core';
import {ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {User} from '../../services/user';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  @Output() registerSuccess = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder,
              private userService: User,private cdRef: ChangeDetectorRef) {}

  registerForm : any;
  successMessage = '';
  errorMessage = '';

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      phoneNumber: ['', [Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
    })
  }

  submitForm(){
    if(this.registerForm.invalid) {
      console.log("Validation Failed");
      console.log(this.registerForm.value);
    }
    this.successMessage = '';
    this.errorMessage = '';
    this.userService.registerUser(this.registerForm.value)
      .subscribe({
        next: (response) =>{
          this.successMessage = 'User Registration Successful';
          this.errorMessage = '';
          console.log(response);
          this.registerForm.reset();
          this.registerSuccess.emit(this.successMessage);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error?.errorMessage || 'Server Error Occured';
          this.successMessage = '';
          this.cdRef.detectChanges();
        }
      }
    )
  }

}
