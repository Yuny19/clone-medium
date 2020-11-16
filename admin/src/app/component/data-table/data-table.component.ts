import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {
    title = 'angular-datatables';


    rows = [];
  
    ngOnInit() {
      this.fetch((data) => {
        this.rows = data;
      });
    }
  
    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `http://localhost:4200/user/`);
  
      req.onload = () => {
        const data = JSON.parse(req.response);
        cb(data);
      };
  
      req.send();
    }
}
