import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appCurreny]"
})
export class CurrencyDirective {
  private el;
  constructor(private elemRef: ElementRef) {
    this.el = this.elemRef.nativeElement;
    this.el.style.textAlign = "right";
  }
  ngOnInit() {
    this.el.value = "$0";
  }
  @HostListener("input", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.currentFormat(value);
  }
  currentFormat = num =>
    "$" + num.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
