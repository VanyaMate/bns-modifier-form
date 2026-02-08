import { ComponentView } from "../../../shared/component/component.view";

export class OptionSettingsTableRowView extends ComponentView<'tr'> {
    public readonly nameInput: HTMLInputElement;
    public readonly amountInput: HTMLInputElement;

    constructor() {
        super('tr', { html: `
            <th>
                <input type="text" data-type="name"/>
            </th>
            <td>
                <input type="number" step="any" data-type="amount"/>
            </td>
        ` });

        this.nameInput = this._getOne('th > input')!;
        this.amountInput = this._getOne('input[data-type="amount"')!;
    }
}