async function setLanguage(lang = 'en') {
  // 1. Fetch the translation file
  const response = await fetch(`/locales/${lang}.json`);
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

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    setLanguage(savedLang);
});
