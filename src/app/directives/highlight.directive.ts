import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appHighlight]'
})
export class HighLightDirective implements OnInit {
    // get access to the element the sits on to inject stylying
    // reference element
    constructor(private elementRef: ElementRef){}
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}