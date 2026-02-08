import { Value } from "../value/value";
import type { IValue } from "../value/value.interface";
import type { IComponentModel } from "./component-model.interface";

export abstract class ComponentModel implements IComponentModel {
    private _values: Array<IValue<unknown>> = [];
    
    public dispose(): void {
        this._values.forEach((value) => value.dispose());
    }

    protected _createValue<ValueType>(state: ValueType): IValue<ValueType> {
        const value = new Value<ValueType>(state);
        this._values.push(value);
        return value;
    }
}