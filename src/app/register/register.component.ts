import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerform: any 


 constructor(private mainser:MainService,private route: Router,private fb: FormBuilder,private toastr:ToastrService){
  
  
 }
 
 ngOnInit() {
  this.registerform = this.fb.group({
    title: [''],
    isbn: [''],
    author: [''],
    description: [''],
    published_date: [''],
    publisher: ['']
  });
}


 onclick(){
  console.log(this.registerform.value);
  // if (this.registerform.valid) {
  //   console.log('Form Submitted', this.registerform.value);
  // }
  this.mainser.postregister(this.registerform.value).subscribe(
  (response) => {
    console.log(response)
      this.route.navigateByUrl('/table')
      this.toastr.success('Registration Completed');
          

    
    },
    error => {
     
      console.log(error);
      this.toastr.error('Wrong password');
      
    }
  )
 }
}

