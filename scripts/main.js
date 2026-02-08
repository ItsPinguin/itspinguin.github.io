async function setLanguage(lang = 'en') {
  // 1. Fetch the translation file
  const response = await fetch(`./locales/${lang}.json`);
  const translations = await response.json();
  console.log("Loaded translations for %s: %o", lang, translations);

  // 2. Find all elements with the data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    
    console.log("Translating element %o with key: %s, %o", element, key, translations);
    // Support nested keys like "hero.title"
    const text = key.split('.').reduce((obj, i) => obj[i], translations);
    
    if (text) {
      element.textContent = text;
    }
    console.log("Set text for %o: %s -> %s", element, key, text);
  });

  // 3. Optional: Save preference to localStorage
  localStorage.setItem('preferred-lang', lang);
}

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
            cardHTML = cardHTML.replaceAll('{project.id}', project.id);
            
            const card = document.createElement('div');
            card.innerHTML = cardHTML;
            container.appendChild(card.firstElementChild);
        });

        console.log("Loaded projects: %s", (localStorage.getItem('preferred-lang') || 'en'));
        setLanguage(localStorage.getItem('preferred-lang') || 'en');
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}