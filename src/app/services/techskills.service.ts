import { Injectable } from '@angular/core';
import { skillset } from '../models/skillset';
import { Observable,of } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechskillsService {

  constructor() { }

  // returning an Observable
  // used Of to retun the data Asynchronously
  getTechnicalSkills(): Observable<skillset[]> {
    return of(technicalSkills);
  }
}

const technicalSkills: skillset[] =
  [
    { skillName: "Web Applications", technology: ["ASP.Net MVC", "ASP.Net Web Forms", "ASP.Net Core"] },
    { skillName: "RESTFull Web APIs", technology:[" ASP.Net Web API 2"]},
    { skillName: "Programming Languages", technology:[" C# and VB.Net"]},
    { skillName: "SOA(SOAP / RESTFull)", technology:[" Web API, WCF and Web Services"]},
    { skillName: "Front End App Dev(SPA) ", technology:["Angular 2/4, AngularJS 1.X, React, Redux, React-Router, HTML5, CSS3, JQuery, Bootstrap, JavaScript, TypeScript"]},
    { skillName: "Relational Database", technology:["SQL Server - 2008, 12 Oracle 9i / 11g"]},
    { skillName: "No SQL Database ", technology:["MongoDB"]},
    { skillName: "Development Tools", technology:[" Visual Studio - 2008, 2010, 2015, 2017", "SSMS", "PL/SQL", "Chrome", "Visual Studio Code"]},
    { skillName: "ORM", technology:["Entity Framework 6.x"]},
    { skillName: "Frameworks", technology:[".Net 2.0, 4.0 and 4.5, .Net Core"]},
    { skillName: "Testing Framework ", technology:["Visual Studio Unit Testing", "Manual Testing", "Karma", "Jasmine","protractor"]},
    { skillName: "Configuration // Version Control Tools", technology:[" Git", "TFS","VSS"]},
    { skillName: "Others", technology:["Microsoft Enterprise library 5.0", "LINQ", "Webpack", "Microservices", "Docker"]},
    { skillName: "Machine Data Analysis", technology:["Splunk"]},
    { skillName: "Analytics", technology:["Google Analytics"]},
    { skillName: "Task Runners", technology:[" Jenkins", "Gulp"]},
    { skillName: "Cloud", technology:[" Azure Web Apps"]},
    { skillName: "Project Execution Methodology", technology:["Agile","Waterfall"]}
  ];
