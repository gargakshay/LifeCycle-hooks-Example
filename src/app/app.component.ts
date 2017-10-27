import {
  Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, Input, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'app';

  @Input() data: string;

  ngOnChanges() {
    console.log('%cAppComponent OnChanges', 'color: green; font-style: italic;');
  }
  ngOnInit() {
    console.log('%cAppComponent OnInit', 'color: green; font-style: italic;');
  }
  ngDoCheck() {
    console.log('%cAppComponent DoCheck', 'color: green; font-style: italic;');
  }
  ngAfterContentInit() {
    console.log('%cAppComponent AfterContentInit', 'color: green; font-style: italic;');
  }
  ngAfterContentChecked() {
    console.log('%cAppComponent AfterContentChecked', 'color: green; font-style: italic;');
  }
  ngAfterViewInit() {
    console.log('%cAppComponent AfterViewInit', 'color: green; font-style: italic;');
  }
  ngAfterViewChecked() {
    console.log('%cAppComponent AfterViewChecked', 'color: green; font-style: italic;');
  }
  ngOnDestroy() {
    console.log('%cAppComponent OnDestroy', 'color: green; font-style: italic;');
  }
}
