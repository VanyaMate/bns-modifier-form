import type { IComponentModel } from "./component-model.interface";
import type { IComponentPresenter } from "./component-presenter.inteface";
import type { IComponentView } from "./component-view.interface";

export abstract class ComponentPresenter implements IComponentPresenter {
    protected abstract _view: IComponentView;
    protected abstract _model: IComponentModel;

    public render(position: InsertPosition, to: Element): void {
        this._view.insert(position, to);
        this._init();
    }

    public remove(): void {
        this._view.remove();
        this._dispose();
    }

    protected abstract _init(): void;

    protected _dispose(): void {
        this._model.dispose();
    }
}