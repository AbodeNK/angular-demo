import { Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, OnInit, Optional, Output, QueryList, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, map, Observable, of, startWith, Subscription, switchMap ,takeUntil,take, Subject} from 'rxjs';
import { A,Z,ZERO, NINE,SPACE,DOWN_ARROW,UP_ARROW } from '@angular/cdk/keycodes';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-selct-input',
  templateUrl: './selct-input.component.html',
  styleUrls: ['./selct-input.component.scss']
})
export class SelctInputComponent implements OnInit, OnDestroy  {
  private searchFormSubscription: Subscription;
  @ViewChild('input', { static: true }) input:ElementRef;

  @Input('array') array: any;
  @Input('placeholder') placeholder: string;
  @Input('displayMember') displayMember: string;
  @Input('noResultsMessage') noResultsMessage = 'No results';

  _options;
  noResults = false;
  @Output() filteredReturn = new EventEmitter<any>();

  public filteredItems: any = [];
  public searchForm: FormGroup;
  constructor(@Inject(MatSelect) public matSelect: MatSelect,fb: FormBuilder,
  @Optional() @Inject(MatOption) public matOption: MatOption = null,
) {
  this.searchForm = fb.group({
    value: ''
  });
}
  ngOnInit() {
    this.searchFormSubscription =  this.searchForm.valueChanges.subscribe(value => {

      if (value['value']) {

        if (this.displayMember == null) {
          this.filteredItems = this.array.filter(name => name.toLowerCase().includes(value['value'].toLowerCase()));
        } 
         else {
          this.filteredItems = this.array.filter(name => name[this.displayMember].toLowerCase().includes(value['value'].toLowerCase()));
        }
        this.noResults = this.filteredItems == null || this.filteredItems.length === 0;
      } 
      else {
        this.filteredItems = this.array.slice();
        this.noResults = false;
      }
      this.filteredReturn.emit(this.filteredItems);

    });

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 500);
    if (!this.placeholder) {
      this.placeholder = 'Search...';
    }
// select First Option
      this._options = this.matSelect.options;
      let previousFirstOption = this._options.toArray()[this.getOptionsLengthOffset()];
      this._options.changes
        .subscribe(() => {
          setTimeout(() => {
            const options = this._options.toArray();
            const currentFirstOption = options[this.getOptionsLengthOffset()];

            const keyManager = this.matSelect._keyManager;
            if (keyManager && this.matSelect.panelOpen) {
              const firstOptionIsChanged = !this.matSelect.compareWith(previousFirstOption, currentFirstOption);
              if (firstOptionIsChanged
                || !keyManager.activeItem
                || !options.find(option => this.matSelect.compareWith(option, keyManager.activeItem))) {
                keyManager.setFirstItemActive();
              }
            }
          });
        });
    //    
  }

  private getOptionsLengthOffset(): number {
    if (this.matOption) {
      return 1;
    } else {
      return 0;
    }
  }

  handleKeydown(event: KeyboardEvent) {
    // PREVENT PROPAGATION FOR ALL ALPHANUMERIC CHARACTERS IN ORDER TO AVOID SELECTION ISSUES
    if ((event.key && event.key.length === 1) ||
          (event.keyCode >= A && event.keyCode <= Z) ||
          (event.keyCode >= ZERO && event.keyCode <= NINE) ||
    (event.keyCode === SPACE))  {
      event.stopPropagation();
    }
  }

  ngOnDestroy() {
    this.filteredReturn.emit(this.array);
    this.searchFormSubscription.unsubscribe();
  }

}


