import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Abdifatah Mursal`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /hi, i'm abdifatah mursal/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});

test("displays an image of Abdifatah with correct alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/profile picture of abdifatah mursal/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays 'About Me' section with heading and paragraph", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(aboutHeading).toBeInTheDocument();

  // Get all paragraphs mentioning Kenyatta University
  const aboutParagraphs = screen.getAllByText(/kenyatta university/i);
  // Verify the first one (the About Me section)
  expect(aboutParagraphs[0]).toBeInTheDocument();
});

test("displays 'Biography' section with heading and paragraph", () => {
  render(<App />);
  const bioHeading = screen.getByRole("heading", { name: /biography/i, level: 2 });
  expect(bioHeading).toBeInTheDocument();

  const bioParagraph = screen.getByText(/technology enthusiast/i);
  expect(bioParagraph).toBeInTheDocument();
});

test("includes a link to the GitHub profile", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("github.com/Abdifatah4817")
  );
});

test("includes a link to the LinkedIn profile", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com/in/abdifatah-mursal")
  );
});
