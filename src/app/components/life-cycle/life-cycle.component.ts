import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
@Input() number = 10;
  constructor() {
    console.log('chamou o Construtor')
  }

  ngOnChanges(): void {
    console.log('chamou o On Chenges')
  }

  ngOnInit(): void {
    console.log('chamou o On Init')
  }

  ngDoCheck(): void {
    console.log('chamou o Do Check')
  }

  ngAfterContentInit(): void {
    console.log('chamou o After Content Init')
  }

  ngAfterContentChecked(): void {
    console.log('chamou o After Content Checked')
  }

  ngAfterViewInit(): void {
    console.log('chamou o After View Init')
  }
  ngAfterViewChecked(): void {
    console.log('chamou o After View Checked')
  }

  ngOnDestroy(): void {
    console.log('chamou o On Destroy')
  }

}
