import { CommonModule, DatePipe } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';




@Component({
  selector: 'app-editform',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.css'
})
export class EditformComponent {
  id :any
  formValues :any = []
  
 
  

  editform:any
today: string | number | Date | undefined;

 constructor(private mainser: MainService,private fb:FormBuilder ,private route: ActivatedRoute,private routepath:Router) {

 }



 ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  console.log(this.id);
  this.loaddata();
  this.editform = this.fb.group({
    _id:[''],
    title: new FormControl(['']),
    isbn: [''],
    author: [''],
    description: [''],
    published_date: [''],
    publisher: ['']
  });
  
}

loaddata(): void {
  this.mainser.getbooks().subscribe(
    (data: any) => {
      console.log(data)
      data.forEach((element: any) => {
        if (element.title  === this.id) {
          this.formValues.push(element);
        }
      });
    },
    (error) => {
      console.error('Error loading data', error);
    }
  );
}

edit() {
  console.log(this.editform.value)
  this.mainser.update(this.editform.value).subscribe((data)=>{
    this.routepath.navigateByUrl("/table")
  })  
 }
}