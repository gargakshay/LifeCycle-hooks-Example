import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Input
} from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() forSecondData: string;
    @Input() forSecondData1: string;
    @Input() forSecondData2: any;

  constructor() { }

  ngOnChanges() {
    console.log('SecondComponent OnChanges');
  }
  ngOnInit() {
    console.log('SecondComponent OnInit');
  }
  ngDoCheck() {
    console.log('SecondComponent DoCheck');
  }
  ngAfterContentInit() {
    console.log('SecondComponent AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('SecondComponent AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('SecondComponent AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('SecondComponent AfterViewChecked');
  }
  ngOnDestroy() {
    console.log('SecondComponent OnDestroy');
  }

}
