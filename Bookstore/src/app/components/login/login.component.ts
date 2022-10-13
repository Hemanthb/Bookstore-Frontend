import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/UserService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    console.log("Logged In",this.loginForm.value);
    let reqData = {
      EmailId:this.loginForm.value.email,
      Password:this.loginForm.value.password
    };
    this.userService.loginService(reqData).subscribe((res:any) => {
      console.log(res);
      //localStorage.setItem("token",res.data);
      //this.router.navigateByUrl("/dashboard/notes");
    });
}
}