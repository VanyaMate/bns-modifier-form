import { ComponentView } from "../../shared/component/component.view";

export class SelectorView extends ComponentView<'div'> {
    private _selectElement: HTMLSelectElement;
    private _inputElement: HTMLInputElement;
    
    constructor() {
        super('div', { 
            html: `
                <input type="text"/>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            `,
        })
        this._inputElement = this._getOne<HTMLInputElement>('input')!;
        this._selectElement = this._getOne<HTMLSelectElement>('select')!;
    }

    getSelect(): HTMLSelectElement {
        return this._selectElement;
    }

    getInput(): HTMLInputElement {
        return this._inputElement;
    }
}