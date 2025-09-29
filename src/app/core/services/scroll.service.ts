import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {

    scrollTo(sectionId: string, duration = 250) {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const start = window.scrollY;

        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;

        const end = element.offsetTop - (viewportHeight / 2) + (elementHeight / 2);

        const distance = end - start;
        let startTime: number | null = null;

        const animateScroll = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, start + distance * progress);
            if (timeElapsed < duration) requestAnimationFrame(animateScroll);
        };

        requestAnimationFrame(animateScroll);
    }
}
