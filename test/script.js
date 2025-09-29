import {
  a,
  div,
  header,
  li,
  link,
  nav,
  Run,
  Text,
  ul,
} from "../build/vanilla-ui.js";

Run(
  header({
    children: [
      link({
        rel: "stylesheet",
        href: "index.css",
      }),
      nav({
        style: {
          display: "flex",
          justifyContent: "space-between",
        },
        children: [
          div({
            class: "icon",
          }),
          div({
            class: "navbarButtons",
            children: ul({
              style: {
                display: "flex",
                gap: "10px",
              },
              children: [
                a({
                  href: "home",
                  children: li({ children: Text("Home") }),
                }),
                a({
                  href: "about",
                  children: li({ children: Text("About") }),
                }),
                a({
                  href: "address",
                  children: li({ children: Text("Address") }),
                }),
                a({
                  href: "contact",
                  children: li({ children: Text("Contact") }),
                }),
                a({
                  href: "register",
                  children: li({ children: Text("SingUp") }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  })
);
