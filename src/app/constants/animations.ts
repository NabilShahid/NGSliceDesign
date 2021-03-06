import {
  trigger,
  transition,
  style,
  query,
  group,
  animate
} from "@angular/animations";

//route change animation, slides in entering route markup
export const slideInAnimation = trigger("routeAnimations", [
  transition(
    "* <=> *",
    [
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
      group([
        query(
          ":leave",
          [animate("0.6s ease-in-out", style({ left: "{{end}}%" }))],
          {
            optional: true
          }
        ),
        query(":enter", [animate("0.6s ease-in-out", style({ left: "0%" }))], {
          optional: true
        })
      ])
    ],
    { params: { start: "100", end: "-100" } }
  )
]);
