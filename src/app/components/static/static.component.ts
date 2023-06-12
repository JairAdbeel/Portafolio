import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css'],
})
export class StaticComponent {

  constructor(
    private clipboard: Clipboard,
    private Renderer: Renderer2
  ) {  }

  @ViewChild("notification") notification!: ElementRef;
  @ViewChild("notification_progress") notification_progress!: ElementRef;

  copiar() {
    this.clipboard.copy('vrodriguezjair@gamil.com')
    this.Renderer.addClass(this.notification.nativeElement, 'animation-notify')
    this.Renderer.addClass(this.notification_progress.nativeElement, 'animation-notify-progress')
    setTimeout( () => {
      this.Renderer.removeClass(this.notification.nativeElement, 'animation-notify')
      this.Renderer.removeClass(this.notification_progress.nativeElement, 'animation-notify-progress')
    }, 3500)
  }

  renovar() {

  }

}
