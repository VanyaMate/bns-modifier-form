import { ComponentModel } from "../../shared/component/component.model";
import type { IValue } from "../../shared/value/value.interface";

export class SelectorModel extends ComponentModel {    
    public selectedValue: IValue<string>;

    constructor() {
        super();
        this.selectedValue = this._createValue<string>("");
    }
}