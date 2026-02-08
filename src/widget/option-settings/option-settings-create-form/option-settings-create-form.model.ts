import type { OptionDomain } from "../../../service/options/option-service.interface";
import { ComponentModel } from "../../../shared/component/component.model";
import { Value } from "../../../shared/value/value";
import type { IValue } from "../../../shared/value/value.interface";

export class OptionSettingsCreateFormModel extends ComponentModel {
    public createData: IValue<OptionDomain | null>;

    constructor() {
        super();
        this.createData = new Value(null);
    }
}