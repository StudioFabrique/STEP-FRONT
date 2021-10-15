import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Directive({
    selector:'[appNewHighlight]'
})
export class NewHighLightDirective implements OnInit {

    
    constructor(private sanitizer: DomSanitizer){}

    @Input() defaultColor: string = '#140a82'
    @Input() defaultImage: string = '../../../assets/img/corner.png'
  

    @HostBinding('style.BackgroundColor') backgroundColor?: string;
    @HostBinding('style.background-image') image?: any;

    ngOnInit(){
        // elRef: gets reference of the element to sit the style on
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
        this.backgroundColor = this.defaultColor
        this.image = this.sanitizer.bypassSecurityTrustStyle(this.defaultImage)
    }
}