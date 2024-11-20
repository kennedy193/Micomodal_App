# Time Zone Clock

A simple web application that displays the current time and date in a specific timezone. The application dynamically updates the time every second and uses the `moment` and `moment-timezone` libraries for timezone-specific calculations.

---

## Features
- Displays the current time and date for a specified timezone.
- Dynamically updates the time and date every second.
- Easy-to-understand interface.

---

## Prerequisites
Before using this project, ensure you have:
- A modern web browser.
- Internet connection (for loading external libraries via CDN).

---

## How to Use
1. Clone or download the project files.
2. Open the `index.html` file in a web browser.
3. The default timezone is set to `America/New_York`. You can update the timezone by modifying the content of the `<h1>` element with `id="timezone"` in the HTML file.

---

## Code Overview

### Files
- **`index.html`**: Contains the HTML structure and includes the script for updating the time and date.
- **External Libraries**:
  - [Moment.js](https://momentjs.com/)
  - [Moment Timezone](https://momentjs.com/timezone/)

### Key Functions
- **`updateTime()`**:  
  Fetches the timezone from the HTML, calculates the current time and date using `moment.tz()`, and updates the corresponding elements in the DOM.

---

## Customization
To customize the displayed timezone:
1. Open the `index.html` file in a text editor.
2. Locate the `<h1 id="timezone">America/New_York</h1>` element.
3. Replace `America/New_York` with the desired timezone (e.g., `Europe/London` or `Asia/Tokyo`).

---

## Demo
A live demo is not provided in this readme, but you can run the application locally to see it in action.

---

## Technologies Used
- **HTML**: For structuring the application.
- **JavaScript**: For dynamic time and date updates.
- **Moment.js & Moment-Timezone**: For handling time and timezone calculations.

---

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

## Author
Created by **Kennedy Butera**.  
Feel free to reach out with suggestions or improvements!
