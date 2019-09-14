import { Directive, OnInit, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropDownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}


  ngOnInit() {}
}
