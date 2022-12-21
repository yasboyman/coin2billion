import React from "react";
import {render, screen} from "@testing-library/react";
import App from "./App";


test('check if text is on the screen', () => {
    render(<App />);
    const textOnPage = screen.getByText('Enter start and end destination and we will let you know dwag')
    expect(textOnPage).toBeInTheDocument()
})

test("renders two input boxes", () => {
    render(<App />);
    const inputElement = screen.getByLabelText('first input')
    expect(inputElement).toBeInTheDocument();
});
