import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {

    scrollTo(sectionId: string, duration = 250) {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const start = window.scrollY;
        const end = element.offsetTop;
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
