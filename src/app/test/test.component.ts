import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  data!: FormGroup;
  userObj: any;
  all_data: any;


  constructor(private userservice: DataService) { }

  ngOnInit(): void {
    this.data = new FormGroup({
      task_name: new FormControl('', [Validators.required]),
    })
    this.getAllUsersr()

  }
  getAllUsersr() {
    this.userservice.user().subscribe((data) => {
      this.all_data = data
    })
  }
  get input(): { [key: string]: AbstractControl } {
    return this.data.controls;
  }

  dataFunction() {

    if (this.data.valid) {

      this.userservice.add(this.data.value).subscribe(userObj => {
        this.data.reset();
        this.getAllUsersr();
      })

    }
  }
  delete(id: string) {
    if (confirm("Are you sure")) {
      this.userservice.deleteuser(id).subscribe((data) => {
        this.getAllUsersr();
      })
    }

  }

  update(id:string,event:any){
  console.log("---dd-->",event.target.checked)
  
    this.userservice.checked(id,event.target.checked).subscribe((val)=>{
      console.log(val);
    })
  }



}
