import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";


test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/image of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});



test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutMeHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });


  expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a paragraph with a biography", () => {
  render(<App />);
  const biography = screen.getByText(/this is my biography/i, { exact: false });
  expect(biography).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
});




test("displays a link to LinkedIn", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
});
