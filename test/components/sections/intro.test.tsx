import { render, screen } from "@testing-library/react";
import { Intro } from "@/components/sections/intro";

describe("Intro", () => {
  it("renders the main heading", () => {
    render(<Intro />);
    expect(screen.getByText(/hi, i'm/i)).toBeInTheDocument();
    expect(screen.getByText("Adesholly")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Intro />);
    expect(
      screen.getByText(/full-stack developer with 5\+ years of experience/i)
    ).toBeInTheDocument();
  });

  it("renders the download CV button", () => {
    render(<Intro />);
    expect(
      screen.getByRole("button", { name: /download cv/i })
    ).toBeInTheDocument();
  });

  it("renders social links", () => {
    render(<Intro />);
    const socialLinks = screen.getAllByRole("link");
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it("renders scroll down link", () => {
    render(<Intro />);
    expect(screen.getByText(/scroll down/i)).toBeInTheDocument();
  });
});
