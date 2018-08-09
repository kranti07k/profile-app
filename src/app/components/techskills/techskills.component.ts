import { Component, OnInit } from '@angular/core';
import { TechskillsService } from '../../services/techskills.service';
import { skillset } from '../../models/skillset';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-techskills',
  templateUrl: './techskills.component.html',
  styleUrls: ['./techskills.component.css']
})
export class TechskillsComponent implements OnInit {

  techSkills: skillset[];
  constructor(private _techSkillsService: TechskillsService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.techSkills = this._route.snapshot.data['skillsData'];
  }

}
