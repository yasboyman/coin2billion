import React from "react";
// @ts-ignore
import { render, screen } from '@testing-library/react'
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText('billion');
  expect(linkElement).toBeInTheDocument();
});
