import { Value } from "../value/value";
import type { IValue } from "../value/value.interface";
import type { IComponentModel } from "./component-model.interface";
import type { IComponentPresenter } from "./component-presenter.inteface";

export abstract class ComponentModel implements IComponentModel {
    private _values: Array<IValue<unknown>> = [];
    private _children: Array<IComponentPresenter> = [];
        
    public addChild(row: IComponentPresenter) {
        this._children.push(row);
    }
    
    public dispose(): void {
        this._children.forEach((child) => child.remove());
        this._values.forEach((value) => value.dispose());
    }

    protected _createValue<ValueType>(state: ValueType): IValue<ValueType> {
        const value = new Value<ValueType>(state);
        this._values.push(value);
        return value;
    }
}