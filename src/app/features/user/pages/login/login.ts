import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import {User} from '../../services/user';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-login',
    imports: [ReactiveFormsModule,CommonModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  @Input() successMessage = '';



  constructor(private formBuilder: FormBuilder,
              private userService: User,private cdRef: ChangeDetectorRef) {}

  loginForm : any;
  loginSuccessMessage = '';
  loginErrorMessage = '';

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(6)]]
    })
  }

  submitForm(){
    if(this.loginForm.invalid) {
      console.log("Validation Failed");
      console.log(this.loginForm.value);
    }

    this.userService.loginUser(this.loginForm.value)
      .subscribe({
          next: (response) =>{
            this.loginSuccessMessage = 'User Logged In Successful';
            this.loginErrorMessage = '';
            console.log(response);
            this.loginForm.reset();
          },
          error: (err) => {
            console.log(err);
            this.loginErrorMessage = 'User Name or Password is incorrect';
            this.loginSuccessMessage = '';
            this.cdRef.detectChanges();
          }
        }
      )
  }



}
