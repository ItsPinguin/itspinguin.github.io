import { HeaderComponent } from "./header.js";

export class PageComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="flex-row flex justify-center items-start w-screen min-h-screen">
                <div class="w-full lg:w-2/3 h-screen p-4 flex flex-col">
                    <header-component></header-component>
                    <div class="h-fit max-h-screen w-full overflow-y-auto">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('page-component', PageComponent);