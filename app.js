// Markdown input and preview elements
const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');

// Live update preview when typing
markdownInput.addEventListener('input', (event) => {
    const markdownText = event.target.value;
    
    // Update the right side with the converted markdown to HTML using marked.js
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
