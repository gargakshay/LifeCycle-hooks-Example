import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Input, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnChanges() {
    console.log('%cThird Component OnChanges', 'color: blue; font-style:italic');
  }
  ngOnInit() {
    console.log('%cThird Component OnInit', 'color: blue; font-style:italic');
  }
  ngDoCheck() {
    console.log('%cThird Component DoCheck', 'color: blue; font-style:italic');
  }
  ngAfterContentInit() {
    console.log('%cThird Component AfterContentInit', 'color: blue; font-style:italic');
  }
  ngAfterContentChecked() {
    console.log('%cThird Component AfterContentChecked', 'color: blue; font-style:italic');
  }
  ngAfterViewInit() {
    console.log('%cThird Component AfterViewInit', 'color: blue; font-style:italic');
  }
  ngAfterViewChecked() {
    console.log('%cThird Component AfterViewChecked', 'color: blue; font-style:italic');
  }
  ngOnDestroy() {
    console.log('%cThird Component OnDestroy', 'color: blue; font-style:italic');
  }

}
