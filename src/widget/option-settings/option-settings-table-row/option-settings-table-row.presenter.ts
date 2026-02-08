import { optionService } from "../../../main";
import type { OptionDomain } from "../../../service/options/option-service.interface";
import { ComponentPresenter } from "../../../shared/component/component.presenter";
import type { IValue } from "../../../shared/value/value.interface";
import { OptionSettingsTableRowModel } from "./option-settings-table-row.model";
import { OptionSettingsTableRowView } from "./option-settings-table-row.view";

export class OptionSettingsTableRowPresenter extends ComponentPresenter {
    protected override _view: OptionSettingsTableRowView;
    protected override _model: OptionSettingsTableRowModel;

    constructor(optionData: IValue<OptionDomain>) {
        super();
        this._view = new OptionSettingsTableRowView();
        this._model = new OptionSettingsTableRowModel(optionData);
    }

    protected override _init(): void {
        this._updateRowData();

        this._model.data.onUpdate(this._updateRowData.bind(this));
        this._model.data.linkTo(
            this._view.nameInput,
            'input',
            () => {
                this._model.data.get().name = this._view.nameInput.value,
                this._model.data.set(this._model.data.get());
                optionService.saveOption(this._model.data.get());
            },
        );

        this._model.data.linkTo(
            this._view.amountInput,
            'input',
            () => {
                this._model.data.get().amountWeight = +this._view.amountInput.value,
                this._model.data.set(this._model.data.get());
                optionService.saveOption(this._model.data.get());
            },
        );
    }

    private _updateRowData() {
        this._view.nameInput.value = this._model.data.get().name;
        this._view.amountInput.value = this._model.data.get().amountWeight.toString();
    }
}