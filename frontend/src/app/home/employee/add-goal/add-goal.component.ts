import { Component, OnInit } from '@angular/core';
import { SendinfoService } from 'src/app/core/services/sendinfo.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {

  constructor(
    private readonly sendInfo: SendinfoService
  ) { }

  addGoal = new FormGroup({
    goal: new FormControl(''),
    goalType: new FormControl(''),
    keyMeasure: new FormControl(''),
    comment: new FormControl(''),
    score: new FormControl(''),
    rating: new FormControl(''),
    managerSupport: new FormControl(''),
    goalActivity: new FormControl(''),
    employee: new FormControl('')
  })

  sendGoal(){
    if(this.addGoal.valid){
      this.addGoal.patchValue({employee: localStorage.getItem('user')})
      console.log(this.addGoal.value)
      this.sendInfo.sendGoal(this.addGoal.value).subscribe((data: any)=>{
        if(data.goal){
          alert(`your ${data.goal} has been add successfully`)
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
