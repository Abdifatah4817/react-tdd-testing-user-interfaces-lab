import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Portfolio Page", () => {
  test("displays a top-level heading with the text `Hi, I'm Abdifatah Mursal`", () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      name: /hi, i'm abdifatah mursal/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  test("displays profile image with correct alt text", () => {
    render(<App />);
    const image = screen.getByRole("img", {
      name: /abdifatah mursal/i, // matches updated alt in App.js
    });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  test("displays 'About Me' heading and paragraph", () => {
    render(<App />);
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    expect(aboutHeading).toBeInTheDocument();

    const aboutParagraph = screen.getByText(/my name is abdifatah mursal/i);
    expect(aboutParagraph).toBeInTheDocument();
  });

  test("displays 'Biography' heading and paragraph", () => {
    render(<App />);
    const bioHeading = screen.getByRole("heading", {
      name: /biography/i,
      level: 2,
    });
    expect(bioHeading).toBeInTheDocument();

    const bioParagraph = screen.getByText(/abdifatah mursal is a passionate technology/i);
    expect(bioParagraph).toBeInTheDocument();
  });

  test("displays links to GitHub and LinkedIn with correct hrefs", () => {
    render(<App />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    expect(githubLink).toHaveAttribute("href", "https://github.com/Abdifatah4817");
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/abdifatah-mursal");
  });
});
