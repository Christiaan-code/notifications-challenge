import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appUnread]',
})
export class UnreadDirective implements OnInit, OnChanges {
  @Input() isUnread: boolean = false;
  defaultColor: string = 'white';
  unreadColor: string = '#F6F9FF';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  @HostBinding('style.boxShadow') boxShadow: string =
    '0 2px 6px 2px hsl(219, 14%, 63%, 10%), 0 3px 20px 10px hsl(219, 14%, 63%, 0%)';
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.isUnread) {
      this.backgroundColor = this.unreadColor;
      this.boxShadow =
        '0 2px 6px 2px hsl(219, 14%, 63%, 10%), 0 3px 20px 10px hsl(219, 14%, 63%, 0%)';
    } else {
      this.backgroundColor = this.defaultColor;
    }
  }

  @HostListener('click') mouseclick(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

  ngOnChanges() {
    if (this.isUnread) {
      this.backgroundColor = this.unreadColor;
      this.boxShadow =
        '0 2px 6px 2px hsl(219, 14%, 63%, 10%), 0 3px 20px 10px hsl(219, 14%, 63%, 0%) !important';
    } else {
      this.backgroundColor = this.defaultColor;
    }
  }
}
