import { AfterViewInit, Directive, ElementRef, Input, Renderer2, Output, OnDestroy, EventEmitter } from '@angular/core';
import {Observable, of, Subject, Subscription, fromEvent} from 'rxjs';
import { startWith } from 'rxjs/operators';
@Directive({
  selector: '[appCounter]'
})
export class CounterDirective implements AfterViewInit{

  @Output() appCounter: EventEmitter<void>;

  elementPos: number = 0;
  elementHeight: number = 0;

  scrollPos: number = 0;
  windowHeight: number = 0;

  subscriptionScroll!: Subscription;
  subscriptionResize!: Subscription;

  end: any= 0;

  @Input('appCounter') to: number = 0;

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2
  ) {
    this.appCounter = new EventEmitter<void>();
  }

  saveDimensions() {    
    this.elementPos = this.getOffsetTop(this.elRef.nativeElement);
    this.elementHeight = this.elRef.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
    this.end = this.counterFunc(this.to, 4000);

  }

  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }


  getOffsetTop(element: any){
    let offsetTop = element.offsetTop || 0;
    if(element.offsetParent){
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility(){
    if(this.isVisible()){
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if(this.isVisible()){
        this.unsubscribe();
        this.appCounter.emit();
      }
    }
  }
  isVisible(){
    return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
  }

 
  subscribe() {
    this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
        .subscribe(() => {
            this.saveScrollPos();
            this.checkVisibility();

            
        });
    this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
        .subscribe(() => {
            this.saveDimensions();
            this.checkVisibility();
        });
}
  unsubscribe(){
    if(this.subscriptionScroll){
      this.subscriptionScroll.unsubscribe();
    }
    if(this.subscriptionResize){
      this.subscriptionResize.unsubscribe();
    }
  }






  ngAfterViewInit(): void {
    this.subscribe();
    // this.counterFunc(this.to, 8000);
  }

  private counterFunc(end: number, duration: number = 4000) {
    let range, current: number, step, timer: any;

    range = end - 0;
    current = end - 40;
    step = Math.abs(Math.floor(duration / range));
    // console.log(`step`, step);

    timer = setInterval(() => {
      current += 1;
      this.setText(current);
      if (current >= end) {
        clearInterval(timer);
      }
    }, step);
  }
  setText(n: number) {
    this.renderer.setProperty(this.elRef.nativeElement, 'innerText', `${n}`);
  }


  ngOnDestroy(){
    this.unsubscribe();
  }

}
