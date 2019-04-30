import React from "react";
import Divider from "../src";
import "../src/assets/index";

export default function() {
    return (
        <div>
            <Divider orientation="left">左边 Left Text</Divider>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            <Divider orientation="right">Right Text 右边</Divider>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
            <Divider>Center Text 居中</Divider>
        </div>
    );
}
