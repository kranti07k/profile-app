import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators'
import { TechskillsService } from '../../services/techskills.service';

@Injectable({
  providedIn: 'root'
})
export class TechSkillResolver implements Resolve<any> {

  constructor(private _techSkillsService: TechskillsService) {

  }
  // resolving data before loading the component
  resolve(){
    return this._techSkillsService.getTechnicalSkills().pipe(
      map(data => data),
    );
  }
}