import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../main.service';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  item: any;
  tableData:any =[]
  constructor( private mainser:MainService,private route:Router,private toastr: ToastrService) {}

  server: any =[]
  ngOnInit() {
   
    this.muni()
  }
  muni() {
    
    this.mainser.getbooks().subscribe(
    (response) => {
      this.server.push(response)
      console.log(response)
        this.route.navigateByUrl('/table')
        this.toastr.success('Table created');
            

      
      },
      error => {
       
        console.log(error);
        
        
      }
    )
   
    
  }
  edit(data:any){
    console.log(data)
    this.route.navigate(["/edit",data.title])
    this.toastr.success('Enable editing');
    
  }

  deleteform(data:any){
    this.mainser.deleteform(data).subscribe(
      (data) => {
      
       this.route.navigateByUrl("/login")
       this.toastr.error('Login deleted');
    
      },
      error => {
    
        this.toastr.error('Wrong password');
      }
    )
    }
  }