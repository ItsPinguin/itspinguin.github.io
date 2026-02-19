export class TestSlot extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
            </style>
            <div class="w-full h-64 bg-zinc-800 border border-zinc-600 rounded-md flex items-center justify-center">
                <p class="text-zinc-400">This is a test slot component. <slot></slot> Hi</p>
            </div>
        `;
    }
}

customElements.define('test-slot', TestSlot);