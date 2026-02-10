async function loadProjects() {
    try {
        const response = await fetch('/assets/data/projects.json');
        const projects = await response.json();
        const container = document.getElementById('projects-container');
        
        projects.forEach(project => {
            // Create a <project-card> element
            const card = document.createElement('project-card');
            
            // Pass project data via dataset
            card.dataset.project = JSON.stringify(project);
            
            // Add it to the container
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});