# Emoji Launchpad 🎹

An interactive emoji keyboard that displays emojis when you press specific keys on your keyboard.

![Emoji Launchpad Preview](https://fav.farm/🔥)

## Features ✨

- **Interactive Keyboard** - Press keys A, S, D, F, G to trigger emojis
- **Visual Feedback** - Keys animate and glow when pressed
- **Animated Display** - The emoji screen has a blinking effect
- **Responsive Design** - Centered layout that works on different screen sizes
- **Clean UI** - Modern design with semi-transparent backgrounds

## How to Use 🚀

1. Open `index.html` in your web browser
2. Press any of these keys on your keyboard:
   - **A** → 😎 (Cool)
   - **S** → 🔥 (Fire)
   - **D** → 💩 (Oops)
   - **F** → 🦄 (Magic)
   - **G** → 🚀 (Go)

3. Watch the emoji appear on the display screen!

## Project Structure 📁

```
emoji-keyboard/
├── index.html      # Main HTML file with structure and logic
├── style.css       # All styling and animations
├── 3482241.jpg     # Background image
└── README.md       # This file
```

## Technical Details 🔧

### HTML
- Semantic structure with display area and keyboard layout
- Uses `data-key` attributes to map keyboard keycodes to emojis
- Keyboard keys wrapped in `<kbd>` tags for proper styling

### CSS
- Flexbox for centering and layout
- Custom animations using `@keyframes`
- Transition effects for smooth key presses
- Blinking animation (`parpadeo`) for the emoji display
- Semi-transparent backgrounds for overlay effect

### JavaScript
- Event listener for `keydown` events
- DOM manipulation to update emoji display
- CSS class toggling for press animations
- Transition end detection to remove animation classes

## Customization 🎨

### Adding New Keys

1. Add a new `<div>` in the HTML:
```html
<div data-key="[KEYCODE]" data-emoji="YOUR_EMOJI" class="key">
  <kbd>[KEY]</kbd>
  <span class="label">Description</span>
</div>
```

2. Update the JavaScript event listener to handle the new key

### Changing Background

Replace `3482241.jpg` with your preferred background image and update the CSS:
```css
html {
    background: url('./your-image.jpg') bottom center;
    background-size: cover;
}
```

## Browser Compatibility 🌐

Works in all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Credits 👏

Created by Juan Sebastián Andrade Sánchez - Built with ❤️ using HTML, CSS, and JavaScript

---

**Enjoy your Emoji Launchpad!** 🎉

