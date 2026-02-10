import { setLanguage } from "../utils/i18n.js";

export class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="h-16 w-full bg-zinc-800 rounded-md border border-zinc-600 p-2 mb-4 
                flex flex-row items-center justify-between px-4">
                <p class="text-zinc-400" data-i18n="components.header.title">My Portfolio</p>
                <p></p>
                <div class="text-zinc-400 border border-zinc-600 rounded-md flex flex-row items-center rounded-md">
                    <button class="px-2 py-1 bg-zinc-800 hover:bg-zinc-600 transition-colors border-r border-zinc-600 rounded-tl-md rounded-bl-md"
                        lang-button="en">EN</button>
                    <button class="px-2 py-1 bg-zinc-800 hover:bg-zinc-600 transition-colors rounded-tr-md rounded-br-md"
                        lang-button="fr">FR</button>
                </div>
            </div>
        `;
        
        // Add event listeners
        this.querySelectorAll('[lang-button]').forEach(button => {
            button.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('lang-button');
                this.updateLanguageButtons(lang);
                setLanguage(lang);
            });
        });
    }
    
    updateLanguageButtons(activeLang) {
        this.querySelectorAll('[lang-button]').forEach(button => {
            if (button.getAttribute('lang-button') === activeLang) {
                button.classList.add('bg-zinc-700');
                button.classList.remove('bg-zinc-800');
            } else {
                button.classList.add('bg-zinc-800');
                button.classList.remove('bg-zinc-700');
            }
        });
    }
}

customElements.define('header-component', HeaderComponent);
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header-component');
    if (header) {
        header.updateLanguageButtons(localStorage.getItem('language') || 'en'); // Set default language to English
    }
});