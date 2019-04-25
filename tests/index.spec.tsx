import React from "react";
import { render } from "react-testing-library";
import Divider from "../src";

describe("Divider", () => {
    test("render", () => {
        const wrapper = render(<Divider />);
        const divider = wrapper.container.querySelector(".xy-divider");
        expect(divider.classList.contains("xy-divider-type-horizontal")).toBeTruthy();
        expect(divider.classList.contains("xy-divider-orientation-center")).toBeTruthy();
    });

    test("dash line", () => {
        const wrapper = render(<Divider dashed={true} />);
        const divider = wrapper.container.querySelector(".xy-divider");
        expect(divider.classList.contains("xy-divider-dashed")).toBeTruthy();
    });

    test("with text", () => {
        const wrapper = render(<Divider>虚线</Divider>);
        const text = wrapper.getByText("虚线");
        expect(text.classList.contains("xy-divider-inner-text")).toBeTruthy();
    });

    test("left text", () => {
        const wrapper = render(<Divider orientation="left">left</Divider>);
        const divider = wrapper.getByText("left").parentElement;
        expect(divider.classList.contains("xy-divider-orientation-left")).toBeTruthy();
    });

    test("right text", () => {
        const wrapper = render(<Divider orientation="right">right</Divider>);
        const divider = wrapper.getByText("right").parentElement;
        expect(divider.classList.contains("xy-divider-orientation-right")).toBeTruthy();
    });

    test("center text", () => {
        const wrapper = render(<Divider orientation="center">center</Divider>);
        const divider = wrapper.getByText("center").parentElement;
        expect(divider.classList.contains("xy-divider-orientation-center")).toBeTruthy();
    });

    test("vertical line", () => {
        const wrapper = render(<Divider type="vertical" />);
        const divider = wrapper.container.querySelector(".xy-divider");
        expect(divider.classList.contains("xy-divider-type-vertical")).toBeTruthy();
    });
});
