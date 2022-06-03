import { Component, OnInit } from '@angular/core';
import { GetinfoService } from 'src/app/core/services/getinfo.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor(
    private getInfo: GetinfoService
  ) { }

  goals: string[] = []
  managers: string[] = []

  completed(){

  }

  ngOnInit(): void {
    this.getInfo.getGoals().subscribe((data: any)=>{
      console.log(data)
      data.goals = this.goals;

      data.managers = this.managers
    })
  }

}
