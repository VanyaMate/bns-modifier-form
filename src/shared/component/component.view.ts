import type { IComponentView } from "./component-view.interface";

export type CreateComponentOptions = {
    options?: ElementCreationOptions;
    html: string;
}

export abstract class ComponentView<Tag extends keyof HTMLElementTagNameMap> implements IComponentView {
    private _element: Element;
    private _inDocument: boolean = false;

    constructor(tagName: Tag, data: CreateComponentOptions) {
        this._element = document.createElement<Tag>(tagName, data.options);
        this._element.innerHTML = data.html;
    }
    
    public insert(position: InsertPosition, to: Element): void {
        to.insertAdjacentElement(position, this._element);
        this._inDocument = true;
    }

    public remove(): void {
        this._element.remove();
        this._inDocument = false;
    }

    public inDocument(): boolean {
        return this._inDocument;
    }

    public getElement(): Element {
        return this._element;
    }

    protected _getOne<Type extends HTMLElement>(selector: string): Type | null {
        return this._element.querySelector<Type>(selector) ?? null;
    }

    protected _getMany<Type extends HTMLElement>(selector: string): Array<Type> {
        return Array.from(this._element.querySelectorAll<Type>(selector));
    }
}