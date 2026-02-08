import { ComponentPresenter } from "../../shared/component/component.presenter";
import { SelectorModel } from "./selector.model";
import { SelectorView } from "./selector.view";

export class SelectorPresenter extends ComponentPresenter {
    protected override _view: SelectorView;
    protected override _model: SelectorModel;
    
    constructor() {
        super();
        this._view = new SelectorView();
        this._model = new SelectorModel();
    }
    
    protected override _init(): void {
        // Update data
        this._view.getInput().value = this._model.selectedValue.get();

        // Subscribes
        this._model.selectedValue.onUpdate((_, current) => this._view.getInput().value = current);
        this._model.selectedValue.linkTo(
            this._view.getSelect(), 
            'change', 
            () => this._model.selectedValue.set(this._view.getSelect().value),
        );
    }
}