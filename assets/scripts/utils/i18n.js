export async function loadTranslations(lang = 'en') {
    const response = await fetch(`/assets/lang/${lang}.json`);
    return response.json();
}

export function detectLanguage() {
    const saved = localStorage.getItem('language');
    if (saved) return saved;
    
    const browserLang = navigator.language.split('-')[0];
    const supported = ['en', 'fr'];
    return supported.includes(browserLang) ? browserLang : 'en';
}

export function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

export function translate(key, translations) {
    try {
        return key.split('.').reduce((obj, k) => obj[k], translations) || key;
    } catch (e) {
        console.error('Translation error for key:', key, e);
        return key;
    }
}

export function insertTranslations(translations) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translate(key, translations);
    });
}