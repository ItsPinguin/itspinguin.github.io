import { loadTranslations, detectLanguage, setLanguage, insertTranslations } from './utils/i18n.js';

// Make setLanguage globally accessible for button clicks
window.setLanguage = setLanguage;
window.loadTranslations = loadTranslations;
window.loadTranslations(detectLanguage()).then(translations => {
    console.log('Loaded translations:', translations);
    // Insert translations into the page
    insertTranslations(translations);
    
    // Store translations globally for components to access
    window.translations = translations;
});