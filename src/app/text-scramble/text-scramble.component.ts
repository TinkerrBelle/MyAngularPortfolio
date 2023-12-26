import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-text-scramble',
  templateUrl: './text-scramble.component.html',
  styleUrls: ['./text-scramble.component.css']
})
export class TextScrambleComponent implements OnInit, OnDestroy {
  
  //HEADER SCRAMBLE TEXT EFFECT
  private el: HTMLElement;
  private chars = '0123456789'; //'!<>-_\\/[]{}—=+*^?#________';
  private queue: any[] = [];
  private frameRequest!: number;
  private frame = 0;
  private resolve!: () => void;

  constructor(private elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
    this.update = this.update.bind(this);
  }

  ngOnInit(): void {
    const phrases = [
      'EZEOKOYE PATRICIA',
    ];

    let counter = 0;

    const next = () => {
      this.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameRequest);
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));

    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);

      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();

    return promise;
  }

  update(): void {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
      


}
