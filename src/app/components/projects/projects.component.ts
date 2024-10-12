import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('eShop') eShop!: ElementRef;
  @ViewChild('fakeOS') fakeOS!: ElementRef;
  @ViewChild('gBooks') gBooks!: ElementRef;
  @ViewChild('minesweeper') minesweeper!: ElementRef;
  @ViewChild('eImage') eImage!: ElementRef;
  @ViewChild('fImage') fImage!: ElementRef;
  @ViewChild('gImage') gImage!: ElementRef;
  @ViewChild('mImage') mImage!: ElementRef;

  threshold = {
    threshold: 0.95,
  };

  ngAfterViewInit() {
    if (window.matchMedia('(min-width: 1025px)').matches) {
      this.eShop.nativeElement.classList.add('opacityZero');
      this.gBooks.nativeElement.classList.add('opacityZero');
      this.fakeOS.nativeElement.classList.add('opacityZero');
      this.minesweeper.nativeElement.classList.add('opacityZero');
      this.eImage.nativeElement.classList.add('visHidden');
      this.fImage.nativeElement.classList.add('visHidden');
      this.gImage.nativeElement.classList.add('visHidden');
      this.mImage.nativeElement.classList.add('visHidden');

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.eShop.nativeElement.classList.add('fade-left-text');
          this.eImage.nativeElement.classList.add('fade-left');
          this.eShop.nativeElement.classList.remove('opacityZero');
          this.eImage.nativeElement.classList.remove('opacityZero');
        }
      }, this.threshold);

      const fakeOsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.fakeOS.nativeElement.classList.add('fade-right-text');
          this.fImage.nativeElement.classList.add('fade-right');
          this.fakeOS.nativeElement.classList.remove('opacityZero');
          this.fImage.nativeElement.classList.remove('opacityZero');
        }
      }, this.threshold);

      const gBooksObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            this.gBooks.nativeElement.classList.add('fade-left-text');
            this.gImage.nativeElement.classList.add('fade-left');
            this.gBooks.nativeElement.classList.remove('opacityZero');
            this.gImage.nativeElement.classList.remove('opacityZero');
          }
        },

        this.threshold
      );

      const minesweeperObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.minesweeper.nativeElement.classList.add('fade-right-text');
          this.mImage.nativeElement.classList.add('fade-right');
          this.minesweeper.nativeElement.classList.remove('opacityZero');
          this.mImage.nativeElement.classList.remove('opacityZero');
        }
      }, this.threshold);

      observer.observe(this.eShop.nativeElement);
      fakeOsObserver.observe(this.fakeOS.nativeElement);
      gBooksObserver.observe(this.gBooks.nativeElement);
      minesweeperObserver.observe(this.minesweeper.nativeElement);
    } else if (window.matchMedia('(min-width:340px)').matches) {
      this.eImage.nativeElement.classList.add('visHidden');
      this.fImage.nativeElement.classList.add('visHidden');
      this.gImage.nativeElement.classList.add('visHidden');
      this.mImage.nativeElement.classList.add('visHidden');
      const eImageObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.eImage.nativeElement.classList.add('fade-left');
          this.eImage.nativeElement.classList.remove('visHidden');
        }
      }, this.threshold);

      const fImageObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.fImage.nativeElement.classList.add('fade-right');
          this.fImage.nativeElement.classList.remove('visHidden');
        }
      }, this.threshold);

      const gImageObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.gImage.nativeElement.classList.add('fade-left');
          this.gImage.nativeElement.classList.remove('visHidden');
        }
      }, this.threshold);

      const mImageObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.mImage.nativeElement.classList.add('fade-right');
          this.mImage.nativeElement.classList.remove('visHidden');
        }
      }, this.threshold);
      eImageObserver.observe(this.eImage.nativeElement);
      fImageObserver.observe(this.fImage.nativeElement);
      gImageObserver.observe(this.gImage.nativeElement);
      mImageObserver.observe(this.mImage.nativeElement);
    }
  }
}
