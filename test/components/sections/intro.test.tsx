import { render, screen } from "@testing-library/react";
import { Intro } from "@/components/sections/intro";

describe("Intro", () => {
  it("renders the main heading", () => {
    render(<Intro />);
    expect(screen.getByText(/hi, i'm/i)).toBeInTheDocument();
    expect(screen.getByText("Ibrahim")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Intro />);
    expect(
      screen.getByText(/full-stack developer with \d+\+ years of experience/i)
    ).toBeInTheDocument();
  });

  it("renders the preview resume button", () => {
    render(<Intro />);
    expect(
      screen.getByRole("link", { name: /preview resume/i })
    ).toBeInTheDocument();
  });

  it("renders the start conversation button", () => {
    render(<Intro />);
    expect(
      screen.getByRole("link", { name: /start a conversation/i })
    ).toBeInTheDocument();
  });

  it("renders scroll down link", () => {
    render(<Intro />);
    expect(screen.getByText(/scroll down/i)).toBeInTheDocument();
  });
});
