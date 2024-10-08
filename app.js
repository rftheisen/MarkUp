// Markdown input and preview elements
const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const darkModeButton = document.getElementById('dark-mode-button');

// Live update preview when typing
markdownInput.addEventListener('input', (event) => {
    const markdownText = event.target.value;
    preview.innerHTML = marked.parse(markdownText);
});

// File saving functionality
document.getElementById('save-button').addEventListener('click', async () => {
    const markdownText = markdownInput.value;
    const blob = new Blob([markdownText], { type: 'text/markdown' });
    
    if (window.showSaveFilePicker) {
        // For Chrome and Edge
        const handle = await window.showSaveFilePicker({
            suggestedName: 'markdown.md',
            types: [{
                description: 'Markdown Files',
                accept: { 'text/markdown': ['.md'] },
            }]
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
    } else {
        // For Safari fallback
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'markdown.md';
        a.click();
        URL.revokeObjectURL(a.href);
    }
});

// Toggle dark mode functionality
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
