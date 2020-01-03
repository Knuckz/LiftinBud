import { Directive, HostListener, Renderer2, ElementRef, AfterViewInit } from "@angular/core";

/*This directive is useful when using bootstrap components*/

@Directive({
    selector: '[app-toggle-directive]'
})
export class toggleDirective implements AfterViewInit {
    isOpen: boolean = false;
    constructor(private el: ElementRef, private renderer: Renderer2) { }
    something: any;

    ngAfterViewInit() {
        this.something = this.el.nativeElement.parentNode.getElementsByClassName("toggle")[0];
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        console.log(this.something);
        if (this.something) {
            if (this.isOpen) {
                this.renderer.addClass(this.something, 'show');
            } else if (!this.isOpen) {
                this.renderer.removeClass(this.something, 'show');
            }
        } else {
            console.log('In toggle directive: no classname toggle found.')
        }

    }
}