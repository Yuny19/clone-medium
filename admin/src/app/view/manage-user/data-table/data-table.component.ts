import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { finalize } from 'rxjs/operators';
import { PageRequest } from '../../../model/page-request.model';
import { PagedApiResponse } from '../../../model/paged-api-response.model';
import { User } from '../../../model';
import { UserService } from '../../../service/user.service';
import { sortTableFn } from '../../../utils/table.util';

@Component({
  selector: 'data-table',
  styleUrls: ['./data-table.component.scss'],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {

  ColumnMode = ColumnMode;
  expanded: boolean = false;
  data: PagedApiResponse<User>;
  loadingIndicator: boolean;
  page: PageRequest = new PageRequest();
  sortTableFn = sortTableFn;

  constructor(private userService: UserService) {}

  get offset(): number {
    return !!(this.data && this.data.pages) ? this.data.pages : 0;
  }

  get rows(): Array<User> {
    return !!(this.data && this.data.docs) ? this.data.docs : [];
  }

  get totalElements(): number {
    return !!(this.data && this.data.total) ? this.data.total : 0;
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(pageNumber: number = 1) {
    this.loadingIndicator = true;
    this.page.page = pageNumber;

    this.userService
      .getUser(this.page)
      .pipe(
        finalize(() => this.loadingIndicator = false)
      )
      .subscribe(data => this.data = data);
  }
}