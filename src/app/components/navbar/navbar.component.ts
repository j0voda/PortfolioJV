import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild('HEADER') header!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const header = this.header.nativeElement;

    this.renderer.listen('window', 'scroll', () => {
      header.style.backgroundColor =
        window.scrollY > 0 ? '#ffffff' : 'transparent';
    });
  }

  closeMenu() {
    this.navbar.nativeElement.classList.remove('open');
    document.body.classList.remove('stop-scrolling');
  }
  toggleMenu() {
    if (this.navbar) {
      if (!this.navbar.nativeElement.classList.contains('open')) {
        this.renderer.addClass(this.navbar.nativeElement, 'open');
        this.renderer.addClass(document.body, 'stop-scrolling');
      } else {
        this.closeMenu();
      }
    }
  }
}
