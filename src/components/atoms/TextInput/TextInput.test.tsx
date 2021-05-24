import React from "react";
import pretty from "pretty";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TextInput from "./TextInput";

let container: any = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("TextInput Component", () => {
  test("should match snapshot", () => {
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  });
  test("should render input without value", () => {
    act(() => {
      render(<TextInput />, container);
    });
    expect(container.querySelector("input").value).toBe('');
  });
  test("should render input with value", () => {
    act(() => {
      render(<TextInput input="some input" />, container);
    });
    expect(container.querySelector("input").value).toBe('some input');
  });
});
