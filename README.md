# Messaging App Mockup

A modern messaging application mockup built with HTML, CSS, and JavaScript.

## Features

1. **Real-time Messaging Interface**
   - Clean, modern UI with gradient design
   - Sent and received message bubbles
   - Timestamps on all messages

2. **Send Button Functionality**
   - User can type messages in the chatbox
   - Clicking Send button displays the typed message
   - Pressing Enter also sends messages

3. **Automated Replies**
   - After sending a message, 5 hardcoded replies appear
   - Replies display 2 seconds apart
   - Progress indicator shows which reply is being generated

4. **Status Bar**
   - Shows "Ready" when idle
   - Changes to "Processing replies..." during reply generation
   - Visual indicator (spinning icon) during processing
   - Shows progress (e.g., "Processing reply 3/5")

5. **Responsive Design**
   - Works on desktop and mobile devices
   - Adapts to different screen sizes

## Project Structure

- `index.html` - Main HTML structure
- `style.css` - All styling and animations
- `app.js` - Application logic and interactivity

## How to Use

1. Open `index.html` in any modern web browser
2. Type a message in the chatbox
3. Click the Send button (or press Enter)
4. Watch as:
   - Your message appears in the chat
   - Status bar changes to "Processing replies..."
   - 5 automated replies appear with 2-second intervals
   - Status bar returns to "Ready" when done

## Technical Details

- **HTML5** for semantic structure
- **CSS3** with Flexbox for layout
- **Vanilla JavaScript** for functionality
- **Font Awesome** for icons
- **CSS Animations** for smooth transitions
- **Responsive Design** with media queries

## Browser Support

Works in all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Customization

You can easily customize:
- Colors in `style.css` (gradient colors, message colors)
- Hardcoded replies in `app.js` (hardcodedReplies array)
- Timing intervals in `app.js` (2000ms = 2 seconds)
- Status messages in `app.js`

## License

This project is open source and available for any use.