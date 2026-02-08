import type { OptionDomain } from "../../../service/options/option-service.interface";
import { ComponentPresenter } from "../../../shared/component/component.presenter";
import type { IValue } from "../../../shared/value/value.interface";
import { OptionSettingsTableRowPresenter } from "../option-settings-table-row/option-settings-table-row.presenter";
import { OptionSettingsTableModel } from "./option-settings-table.model";
import { OptionSettingsTableView } from "./option-settings-table.view";

export class OptionSettingsTablePresenter extends ComponentPresenter {
    protected override _view: OptionSettingsTableView;
    protected override _model: OptionSettingsTableModel;

    constructor(private readonly _options: IValue<Array<IValue<OptionDomain>>>) {
        super();
        this._view = new OptionSettingsTableView();
        this._model = new OptionSettingsTableModel();
    }

    protected override _init(): void {
        this._renderTableByOptions(this._options.get());
        this._options.onUpdate((_, current) => {
            this._dispose();
            this._renderTableByOptions(current);
        })
    }

    private _renderTableByOptions(options: Array<IValue<OptionDomain>>) {
        options.forEach((option) => {
            const row = new OptionSettingsTableRowPresenter(option);
            this._model.addChild(row);
            row.render('beforeend', this._view.tbody);
        });
    }
}