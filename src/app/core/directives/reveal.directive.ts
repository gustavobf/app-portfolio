import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[appReveal]'
})
export class RevealDirective implements OnInit {
    @HostBinding('class.revealed') isRevealed = false;

    constructor(private el: ElementRef) { }

    ngOnInit(): void {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.isRevealed = true;
                    observer.unobserve(this.el.nativeElement);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(this.el.nativeElement);
    }
}
