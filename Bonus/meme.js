"use strict";
document.addEventListener('DOMContentLoaded', () => {

    const generateBtn = document.getElementById('generate-btn');
    const memePreview = document.getElementById('meme-preview');
    const loading = document.getElementById('loading');

    async function genererMeme() {
        loading.style.display = 'block';
        
        try {
            const response = await fetch('https://meme-api.com/gimme');
            const data = await response.json();
            
            if (data.url) {
                memePreview.innerHTML = '<img src="' + data.url + '" alt="Meme" style="max-width: 500px;">';
            } else {
                alert('Erreur lors de la récupération du mème');
            }
        } catch (error) {
            alert('Erreur lors de la génération du mème');
            console.error(error);
        } finally {
            loading.style.display = 'none';
        }
    }

    generateBtn.addEventListener('click', genererMeme);
});