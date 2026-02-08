import { ComponentPresenter } from "../../shared/component/component.presenter";
import { SettingsWidgetModel } from "./settings-widget.model";
import { SettingsWidgetView } from "./settings-widget.view";

export class SettingsWidgetPresenter extends ComponentPresenter {
    protected override _view: SettingsWidgetView;
    protected override _model: SettingsWidgetModel;

    constructor() {
        super();
        this._view = new SettingsWidgetView();
        this._model = new SettingsWidgetModel();
    }

    protected override _init(): void {
        
    }
}