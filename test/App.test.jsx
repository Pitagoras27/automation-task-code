import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";

describe("test for App component", () => {
  
  test("should render App", () => {
    render(<App />)
  })
  
})