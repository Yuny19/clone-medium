import { PageRequest } from '../model/page-request.model';

export function sortTableFn(pageRequest: PageRequest, event: any): void {
  pageRequest.page = 1;
  // pageRequest.sort = `${event.column.prop},${event.newValue}`;
}