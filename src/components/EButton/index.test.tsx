import EButton from "./index";

import { render } from "@testing-library/react";

import { describe, test, expect, vi } from "vitest";

describe("test Button", () => {
  //测试按钮是否渲染了
  test("should render", () => {
    const { getByText } = render(<EButton label="hello" onClick={vi.fn()} />);
    expect(getByText("hello")).toBeDefined();
  });
  //测试按钮是否点击了
  test("should click", () => {
    const onClick = vi.fn();
    const { getByText } = render(<EButton label="hello" onClick={onClick} />);
    getByText("hello").click();
    expect(onClick).toBeCalled();
  });
  //测试按钮是否禁用了
  test("should disabled", () => {
    const onClick = vi.fn();
    const res = render(
      <EButton label="hello" disabled={true} onClick={onClick} />,
    );
    res.getByText("hello").click();
    expect(onClick).not.toBeCalled();
  });
  //测试按钮大小生效
  test("should size", () => {
    const res = render(<EButton label="hello" size="large" />);
    expect(res.getByText("hello").className).toContain("btn-large");
  });
});
