import { ComponentView } from "../../../shared/component/component.view";

export class OptionSettingsCreateFormView extends ComponentView<'form'> {
    public nameInput: HTMLInputElement;

    constructor() {
        super('form', { html: `
            <input type="text" name="name"/>
            <button type="submit">Создать</button>
        ` });

        this.nameInput = this._getOne('input')!;
    }
}