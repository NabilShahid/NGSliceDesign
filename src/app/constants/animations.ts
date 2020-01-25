import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("* <=> *", [
    style({ position: "relative" }),
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%"
        })
      ],
      { optional: true }
    ),
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%"
        })
      ],
      { optional: true }
    ),
    query(":enter", [style({ left: "{{start}}%" })], { optional: true }),
    // query(":leave", animateChild(), { optional: true }),
    group([
      query(":leave", [animate("1s ease-out", style({ left: "{{end}}%" }))], {
        optional: true
      }),
      query(":enter", [animate("1s ease-out", style({ left: "0%" }))], {
        optional: true
      })
    ]),
    // query(":enter", animateChild(), { optional: true })
  ],{params:{ start: "-100", end: "100" }})
]);

