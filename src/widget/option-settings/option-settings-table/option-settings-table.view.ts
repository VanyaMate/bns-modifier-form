import { ComponentView } from "../../../shared/component/component.view";

export class OptionSettingsTableView extends ComponentView<'table'> {
    public tbody: HTMLTableSectionElement;

    constructor() {
        super('table', { html: `
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Вес</th>
                </tr>
            </thead>
            <tbody></tbody>
        ` });

        this.tbody = this._getOne('tbody')!;
    }
}