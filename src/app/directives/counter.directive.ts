import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective implements AfterViewInit{

  @Input('appCounter') to: number = 0;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.counterFunc(this.to, 4000);
  }

  private counterFunc(end: number, duration: number = 3000) {
    let range, current: number, step, timer: any;

    range = end - 0;
    current = end - 20;
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

}
