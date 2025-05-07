import {
    A,
    Div,
    Header,
    Li,
    Link,
    Nav,
    Run,
    Text,
    Ul,
} from "../output/main.js";

Run(
    Header({
        childs: [
            Link({
                rel: "stylesheet",
                href: "index.css",
            }),
            Nav({
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                },
                childs: [
                    Div({
                        class: "icon",
                    }),
                    Div({
                        class: "navbarButtons",
                        childs: Ul({
                            style: {
                                display: "flex",
                                gap: "10px",
                            },
                            childs: [
                                A({
                                    href: "home",
                                    childs: Li({ childs: Text("Home") }),
                                }),
                                A({
                                    href: "about",
                                    childs: Li({ childs: Text("About") }),
                                }),
                                A({
                                    href: "address",
                                    childs: Li({ childs: Text("Address") }),
                                }),
                                A({
                                    href: "contact",
                                    childs: Li({ childs: Text("Contact") }),
                                }),
                                A({
                                    href: "register",
                                    childs: Li({ childs: Text("SingUp") }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    }),
);
