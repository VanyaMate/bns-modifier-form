import type { IValue } from "../../shared/value/value.interface";

export type OptionDomain = {
    id: string;
    name: string;
    amountWeight: number;
}

export interface IOptionService {
    getOptions(): Promise<IValue<Array<IValue<OptionDomain>>>>;
    getOption(id: string): Promise<IValue<OptionDomain> | null>;
    saveOption(data: OptionDomain): Promise<void>;
    clearSaveOptions(options: Array<OptionDomain>): Promise<void>;
    removeOption(id: string): Promise<void>;
    createOption(data: OptionDomain): void;
}