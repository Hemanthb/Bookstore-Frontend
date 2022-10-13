import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/UserService/user-service.service'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  RegisterForm!: FormGroup;
  submitted = false;
  constructor( private formBuilder : FormBuilder, private user :UserServiceService, private router : Router) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      EmailId: ['', Validators.required],
      Password: ['', Validators.required],
      PhoneNo: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.RegisterForm.valid) {
      console.log("valid", this.RegisterForm.value);
      let reqData = {
        FullName: this.RegisterForm.value.FullName,
        EmailId: this.RegisterForm.value.EmailId,
        Password: this.RegisterForm.value.Password,
        PhoneNo: parseInt(this.RegisterForm.value.PhoneNo)
        
      }
      this.user.registerService(reqData).subscribe((response: any) => {
        console.log(response);
        this.router.navigateByUrl('/login');
      }
      );
    }
    
  }
  
}
