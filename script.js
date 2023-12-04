document.addEventListener('DOMContentLoaded', function() {
    // Example dynamic content loading (implement according to your backend/API)
    fetch('api/apps.json')
        .then(response => response.json())
        .then(apps => {
            apps.forEach(app => {
                const appElement = document.createElement('article');
                appElement.className = 'app';
                appElement.innerHTML = `
                    <a href="${app.link}">
                        <img src="${app.image}" alt="${app.name}">
                        <span class="app-info">${app.description}. Released: ${app.releaseDate}.</span>
                    </a>
                `;
                document.querySelector('.app-container').appendChild(appElement);
            });
        })
        .catch(error => console.error('Error loading app data:', error));
});
