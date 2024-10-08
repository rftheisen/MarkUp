# MarkUp - A Browser-Based Markdown Editor

MarkUp is a lightweight, browser-based Markdown editor that provides real-time previews of your Markdown syntax. Write Markdown in the editor pane, and instantly see the formatted result in the preview pane. With the ability to save your work directly to your local filesystem, MarkUp brings the simplicity of Markdown together with a powerful and intuitive editing experience, all in your browser.

## Features

- **Live Preview**: See how your Markdown looks as you type.
- **File Saving**: Save your Markdown files directly to your local machine (works best in Chrome and Edge).
- **Simple UI**: Clean and distraction-free interface for writing.
- **Cross-Browser Support**: Works in modern browsers, with file-saving fallbacks for Safari.

## How to Use

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/MarkUp.git
    ```

2. Navigate to the project folder:

    ```bash
    cd MarkUp
    ```

3. Open `index.html` in your preferred browser (for best results, use Chrome or Edge):

    ```bash
    open index.html
    ```

4. Start typing Markdown in the editor on the left, and see the live preview on the right. When you're ready, click "Save File" to download the markdown file to your local machine.

<img width="1228" alt="MarkUP" src="https://github.com/user-attachments/assets/065724dc-4810-4e69-a189-73e60a2ea9ba">


## Technologies Used

- **HTML5**: The structure of the application.
- **CSS3**: Styling the editor and preview panes.
- **JavaScript (ES6+)**: Adding interactivity and real-time functionality.
- **[marked.js](https://marked.js.org/)**: Converts Markdown to HTML.

## Browser Compatibility

- **Google Chrome**: Full support, including file saving.
- **Microsoft Edge**: Full support, including file saving.
- **Safari**: Markdown editing works, but file saving uses a download fallback.

## Contributing

Contributions are welcome! If you'd like to contribute to the development of MarkUp, feel free to:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and submit a pull request.

## License

MarkUp is open-source and licensed under the MIT License. See the `LICENSE` file for more details.

## Roadmap

- [ ] Add support for syntax highlighting in code blocks.
- [ ] Implement drag-and-drop file loading.
- [ ] Expand browser support for advanced file handling.

## Acknowledgments

- Special thanks to [marked.js](https://marked.js.org/) for providing the Markdown-to-HTML conversion engine.
