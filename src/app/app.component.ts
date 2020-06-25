import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'swapi-dev';
 data:any = [];
 info:any = [];
 each:string;
 X:any;
 constructor(
  private router: Router,
  private http: HttpClient,
  private appService: AppService
) {}

 getData(){
   this.appService.findAll().subscribe((res)=>{
     this.data = res;
   })
 }

 getFeature(random){
  this.appService.findFeatures(random).subscribe((ret)=>{
    this.info = ret;
    this.X = JSON.stringify(this.info, null, "\t");
    for (var key in this.info) {
     if (this.info.hasOwnProperty(key)) {
       this.each = key;
     }
 }
  })
 }

}
