
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './recieps.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// tslint:disable-next-line:class-name
export class AppComponent implements OnInit, OnDestroy {
  recipes: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
      this.dataService.getData().subscribe((data) => {
        this.recipes = data.results;
        console.log(data.results);
      });
  }




  ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
  }

}
