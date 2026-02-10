export class ProjectCard extends HTMLElement {
    connectedCallback() {
        const project = JSON.parse(this.dataset.project);
        const translations = window.translations || {};
        console.log('ProjectCard translations:', translations);
        const viewProjectText = translations['components']['project-card']['view-project'] || 'Error';
        
        this.innerHTML = `
            <div class="w-full flex flex-row bg-zinc-800 border border-zinc-600 rounded-md h-48">
                <img src="${project.image}" alt="${project.title}" class="w-32 h-48 rounded-bl-md rounded-tl-md object-cover cursor-pointer" onclick="window.open('${project.url}', '_self')">
                <div class="w-full rounded-tr-md rounded-br-md bg-zinc-800 p-2 pr-4
                    flex flex-col gap-2">
                    <div class="flex-row flex gap-4 justify-between items-start w-full">
                        <p class="text-zinc-100 text-base font-sans font-bold" data-i18n="projects.${project.id}.title">Loading project...</p>
                        <p class="text-zinc-400 font-sans text-sm font-light" data-i18n="projects.${project.id}.date">${project.date}</p>
                    </div>
                    <p class="text-zinc-300 font-sans text-base line-clamp-3 h-full" data-i18n="projects.${project.id}.description"></p>
                    <div class="flex flex-col items-end justify-end h-full w-full">
                        <div onclick="window.open('${project.url}', '_self')" class="m-2 mr-0 text-zinc-400 font-sans text-sm cursor-pointer hover:text-zinc-200 border rounded-md border-zinc-600 p-2 hover:bg-zinc-700"
                        data-i18n="project-card.view-project">${viewProjectText}</div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('project-card', ProjectCard);