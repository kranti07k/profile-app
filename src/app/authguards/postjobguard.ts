import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router,CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class PostJobActivator implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot){
    
    // write logic whether to allow user to Post job page or not
    // as of now returning true
      return true;
  }
}
