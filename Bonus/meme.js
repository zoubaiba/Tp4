// DOM elements
const generateBtn = document.getElementById('generate-btn');
const memePreview = document.getElementById('meme-preview');
const loading = document.getElementById('loading');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateBtn.addEventListener('click', genererMeme);
});

// Generate random meme using Meme API
async function genererMeme() {

    
    try {
        const response = await fetch('https://meme-api.com/gimme');
        const data = await response.json();
        
        if (data.url) {
            memePreview.innerHTML = '<img src="' + data.url + '" alt="Meme" style="max-width: 500px;">';
        }
    } catch (error) {
        console.error(error);
    }
}
