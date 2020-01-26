import { TransformService } from "../../services/transform.service";
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appCurreny]"
})
export class CurrencyDirective {
  private el;
  constructor(
    private elementRef: ElementRef,
    private transformService: TransformService
  ) {
    this.el = this.elementRef.nativeElement;
    this.el.style.textAlign = "right";
  }
  ngOnInit() {
    this.el.value = "$0";
  }
  @HostListener("input", ["$event.target.value"])
  onInput(value) {
    this.el.value = this.transformService.currencyTransform(value);
  }
}
