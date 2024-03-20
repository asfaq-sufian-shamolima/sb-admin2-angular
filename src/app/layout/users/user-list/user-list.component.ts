import { ChangeDetectorRef, Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../../models/country';
import { SBSortableHeaderDirective, SortEvent } from '../../customers/dirctives/sortable.directive';
import { CountryService } from '../../customers/services/customers.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() pageSize = 4;

  countries$!: Observable<Country[]>;
  total$!: Observable<number>;
  sortedColumn!: string;
  sortedDirection!: string;

  @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

  constructor(
      public countryService: CountryService,
      private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
      this.countryService.pageSize = this.pageSize;
      this.countries$ = this.countryService.countries$;
      this.total$ = this.countryService.total$;
  }

  onSort({ column, direction }: SortEvent) {
      this.sortedColumn = column;
      this.sortedDirection = direction;
      this.countryService.sortColumn = column;
      this.countryService.sortDirection = direction;
      this.changeDetectorRef.detectChanges();
  }
}
