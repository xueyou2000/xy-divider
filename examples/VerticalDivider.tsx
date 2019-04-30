import React from "react";
import Divider from "../src";
import "../src/assets/index";

export default function() {
    return (
        <div>
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
        </div>
    );
}
