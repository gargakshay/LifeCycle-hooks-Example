import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Input, ChangeDetectionStrategy
} from '@angular/core';

class Obj {
  public forSecondData2: string;
}
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() forFirstData: string;

  forSecondData1: string;
  obj;
  constructor() {
    this.obj = new Obj();
  }

  get DummyData() {
    return 'get dummy data';
  }

  ngOnChanges() {
    console.log('%cFirstComponent OnChanges', 'color: orange; font-style: italic;');
  }
  ngOnInit() {
    console.log('%cFirstComponent OnInit', 'color: orange; font-style: italic;');
  }
  ngDoCheck() {
    console.log('%cFirstComponent DoCheck', 'color: orange; font-style: italic;');
  }
  ngAfterContentInit() {
    console.log('%cFirstComponent AfterContentInit', 'color: orange; font-style: italic;');
  }
  ngAfterContentChecked() {
    console.log('%cFirstComponent AfterContentChecked', 'color: orange; font-style: italic;');
  }
  ngAfterViewInit() {
    console.log('%cFirstComponent AfterViewInit', 'color: orange; font-style: italic;');
  }
  ngAfterViewChecked() {
    console.log('%cFirstComponent AfterViewChecked', 'color: orange; font-style: italic;');
  }
  ngOnDestroy() {
    console.log('%cFirstComponent OnDestroy', 'color: orange; font-style: italic;');
  }
}
