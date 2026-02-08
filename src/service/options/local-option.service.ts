import { Value } from "../../shared/value/value";
import type { IValue } from "../../shared/value/value.interface";
import type { IOptionService, OptionDomain } from "./option-service.interface";

export class LocalOptionService implements IOptionService {
    private readonly _lsName: string = "OPTIONS_LS";
    private _data: IValue<Array<IValue<OptionDomain>>> = new Value([]);

    constructor() {
        const storageData = localStorage.getItem(this._lsName);
        const optionDomains: Array<OptionDomain> = storageData ? JSON.parse(storageData) : [];
        this._data = new Value(optionDomains.map((option) => new Value(option)));
    }

    public createOption(data: OptionDomain): void {
        this._data.set(this._data.get().concat(new Value(data)));
        this._saveStorage();
    }

    public async getOption(id: string): Promise<IValue<OptionDomain> | null> {
        return this._data.get().find((option) => option.get().id === id) ?? null;
    }

    public async getOptions(): Promise<IValue<Array<IValue<OptionDomain>>>> {
        return this._data;
    }

    public async removeOption(id: string): Promise<void> {
        const index = this._data.get().findIndex((option) => option.get().id === id);
        if (~index) { 
            this._data.get().splice(index, 1);
            this._data.invoke();
            this._saveStorage();
        }
    }

    public async saveOption(data: OptionDomain): Promise<void> {
        const index = this._data.get().findIndex((option) => option.get().id === data.id);
        if (~index) {
            this._data.get()[index].set(data);
            this._saveStorage();
        }
    }

    public async clearSaveOptions(options: Array<OptionDomain>): Promise<void> {
        this._data.set(options.map((option) => new Value(option)));
        this._saveStorage();
    }

    private _saveStorage() {
        localStorage.setItem(this._lsName, JSON.stringify(this._data.get().map((option) => option.get())));
    }
}