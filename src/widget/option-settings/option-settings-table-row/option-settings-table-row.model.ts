import type { OptionDomain } from "../../../service/options/option-service.interface";
import { ComponentModel } from "../../../shared/component/component.model";
import type { IValue } from "../../../shared/value/value.interface";

export class OptionSettingsTableRowModel extends ComponentModel {
    constructor (public readonly data: IValue<OptionDomain>) {
        super();
    }
}