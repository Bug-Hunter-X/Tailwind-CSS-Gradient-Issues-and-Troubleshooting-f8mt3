```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <h2 class="text-white text-2xl font-bold">Gradient Background</h2>
</div>
```
To solve the gradient issues, you can follow these steps:

1. **Check the Gradient Direction:** Make sure the direction (`to-r`, `to-l`, etc.) correctly represents the gradient's flow. Try different directions if necessary.
2. **Inspect Conflicting Styles:** Carefully examine the CSS rules applied to the element, and ensure that no other styles, like `background-color`, overwrite the gradient. Use your browser's developer tools to inspect the styles applied.
3. **Verify Color Values:** Ensure the `from-` and `to-` color values are valid Tailwind CSS color names or hex codes. Refer to the Tailwind CSS documentation for the complete list of available colors.
4. **Tailwind Configuration:** Verify that Tailwind is properly configured and that you've included the necessary configuration options for gradients.  Check your `tailwind.config.js` and ensure that the `theme` section includes gradient definitions if you are using custom ones.
5. **CSS Specificity:** If other styles have higher specificity, they might override your Tailwind gradient. Experiment with CSS selectors and use the `!important` flag (sparingly) as a last resort. Adjust the CSS order or use more specific selectors to resolve specificity issues.