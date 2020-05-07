import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { contries } from '../../../contries.config';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.css']
})
export class LazyLoadingComponent implements OnInit {

  form: FormGroup;
  allContries = contries;
  contriesList = [];
  pageNo = 1;
  pageSize = 50;
  isLoading = false;
  searchText = '';
  search$ = new Subject<string>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      contry: [null],
    });
  }

  ngOnInit() {
    this.search$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
    ).subscribe(searchText => {
      this.searchText = searchText;
      this.pageNo = 1;
      this.contriesList = [];
      this.loadContries();
    });
  }

  onSelect(event) {
    console.log(event);
  }

  loadContries() {
    if(!this.pageNo) {
      return;
    }
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      let response = this.getContriesFromServer(this.pageNo, this.pageSize, this.searchText);
      console.log(response);
      this.contriesList = [...this.contriesList, ...response.data];

      let totalPages = Math.ceil(response.count / this.pageSize);
      if(totalPages === this.pageNo) {
        this.pageNo = 0;
      } else {
        this.pageNo++;
      }
    }, 500)
  }

  getContriesFromServer(pageNo: number, pageSize: number, searchText?: string) : {count: number, data: any[]} {
    let begin = ((pageNo - 1) * pageSize);
    let end = begin + pageSize;
    let data = [], count = 0;

    if(searchText) {
      const filteredContries = this.allContries.filter(contry => {
        return contry.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
      });
      return {
        count: filteredContries.length,
        data: filteredContries.slice(begin, end)
      }
    } else {
      return {
        count: this.allContries.length,
        data: this.allContries.slice(begin, end)
      }
    }
  }

}