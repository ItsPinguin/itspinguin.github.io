async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        const container = document.getElementById('projects-container');
        
        // Fetch the card template
        const templateResponse = await fetch('card.html');
        const cardTemplate = await templateResponse.text();
        
        projects.forEach(project => {
            let cardHTML = cardTemplate;
            
            // Replace placeholder values with project data
            cardHTML = cardHTML.replaceAll('{project.image}', project.image);
            cardHTML = cardHTML.replaceAll('{project.title}', project.title);
            cardHTML = cardHTML.replaceAll('{project.date}', project.date);
            cardHTML = cardHTML.replaceAll('{project.description}', project.description);
            cardHTML = cardHTML.replaceAll('{project.url}', project.url);
            
            const card = document.createElement('div');
            card.innerHTML = cardHTML;
            container.appendChild(card.firstElementChild);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
