# Tailwind CSS Gradient Issues and Troubleshooting

This repository demonstrates some uncommon issues and troubleshooting steps for using gradients in Tailwind CSS.  The primary issue focuses on unexpected behavior of gradients due to various factors like incorrect direction, conflicting styles, or issues with Tailwind's configuration.

## Issues Addressed

* **Incorrect Gradient Direction:** Demonstrates how misusing direction keywords can lead to the gradient not rendering as intended.
* **Conflicting Styles:** Shows how other CSS styles can override the gradient.
* **Missing or Incorrect Color Values:** Highlights the importance of valid color specifications in the gradient syntax.
* **CSS Specificity Problems:** Explains how CSS specificity can prevent a gradient from appearing.

## How to Reproduce

1. Clone the repository.
2. Install Node.js and npm (or yarn).
3. Run `npm install` (or `yarn install`).
4. Open `bug.js` to see the initial buggy code.
5. Open `bugSolution.js` to see the corrected code.

## Solution

The solution involves careful review of the CSS, verifying color values and the gradient direction, ensuring no conflicting styles override the gradient, and finally, addressing potential CSS specificity issues.  `bugSolution.js` provides the correct code with explanations of the fixes.