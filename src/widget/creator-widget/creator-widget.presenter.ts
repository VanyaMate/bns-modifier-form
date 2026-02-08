import { ComponentPresenter } from "../../shared/component/component.presenter";
import { CreatorWidgetModel } from "./creator-widget.model";
import { CreatorWidgetView } from "./creator-widget.view";

export class CreatorWidgetPresenter extends ComponentPresenter {
    protected override _view: CreatorWidgetView;
    protected override _model: CreatorWidgetModel;

    constructor() {
        super();
        this._view = new CreatorWidgetView();
        this._model = new CreatorWidgetModel();
    }

    protected override _init(): void {
        
    }
}