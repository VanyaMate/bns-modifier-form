import type { IOptionService } from "../../../service/options/option-service.interface";
import { ComponentPresenter } from "../../../shared/component/component.presenter";
import { OptionSettingsCreateFormModel } from "./option-settings-create-form.model";
import { OptionSettingsCreateFormView } from "./option-settings-create-form.view";

export class OptionSettingsCreateFormPresenter extends ComponentPresenter {
    protected override _view: OptionSettingsCreateFormView;
    protected override _model: OptionSettingsCreateFormModel;

    constructor(private readonly _optionService: IOptionService) {
        super();
        this._view = new OptionSettingsCreateFormView();
        this._model = new OptionSettingsCreateFormModel();
    }

    protected override _init(): void {
        this._model.createData.linkTo(
            this._view.getElement(),
            'submit',
            (event) => {
                event.preventDefault();
                this._optionService.createOption({ 
                    id: crypto.randomUUID(), 
                    name: this._view.nameInput.value, 
                    amountWeight: 0,
                })
            }
        );
    }
}