import <NameOfApp> from "./app";
import { getMessages } from "./messages";
import "./style/main.scss";

document.addEventListener("DOMContentLoaded", () => {

    <NameOfApp>.init(
        {

        },
        document.getElementById("<root element>"),
    );
}, false);
