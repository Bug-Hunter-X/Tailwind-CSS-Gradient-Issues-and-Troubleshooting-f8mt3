```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <h2 class="text-white text-2xl font-bold">Gradient Background</h2>
</div>
```
This code snippet uses Tailwind's `bg-gradient-to-r` utility class to create a gradient background. However, if you encounter unexpected behavior or the gradient doesn't appear as expected, there might be several reasons. These include:

1. **Incorrect Gradient Direction**: The direction specified (`to-r` in this case) might not be what you intended. Tailwind offers other options such as `to-t`, `to-b`, `to-l`, `to-tr`, `to-br`, etc.  Verify that the specified direction aligns with the desired gradient flow.

2. **Conflicting Styles**: Other styles applied to the element might override the gradient. Make sure that no other style rules (e.g., `background-color`) conflict with the gradient.

3. **Missing or Incorrect Color Values**: The `from-` and `to-` color values might be invalid or might not be properly defined in your Tailwind configuration. Double-check that the color names or hex codes are correct.

4. **Incorrect Import/Setup**: Ensure that you have correctly installed and configured Tailwind CSS in your project. Verify your `tailwind.config.js` and your CSS file have the necessary setup.

5. **CSS Specificity Issues**: If other styles have higher specificity, they might override Tailwind's gradient.  Use `!important` as a last resort or adjust the CSS order and specificity to ensure the gradient is applied correctly. 