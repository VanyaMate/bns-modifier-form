import type { IValue, ValueLinkToEvent, ValueUpdateHandler, ValueUpdateHandlerUnsubscribe } from "./value.interface";
type ValueLinkSubscribeMeta = {
    element: Element;
    eventName: string;
    handler: ValueLinkToEvent;
}

export class Value<ValueType> implements IValue<ValueType> {
    private _value: ValueType;
    private _callbacks: Array<ValueUpdateHandler<ValueType>> = [];
    private _links: Array<ValueLinkSubscribeMeta> = [];
    
    constructor(value: ValueType) {
        this._value = value;
    }

    public get(): ValueType {
        return this._value;
    }

    public set(value: ValueType): void {
        const previousValue = this._value;
        this._value = value;
        this._onUpdateHandler(previousValue, value);
    }

    public dispose(): void {
        this._callbacks.length = 0;
        this._links.forEach((link) => link.element.removeEventListener(link.eventName, link.handler));
    }

    public onUpdate(callback: ValueUpdateHandler<ValueType>): ValueUpdateHandlerUnsubscribe {
        this._callbacks.push(callback);
        return () => {
            const index = this._callbacks.indexOf(callback);
            if (~index) this._callbacks.splice(index, 1);
        }
    }

    public linkTo<ElementType extends HTMLElement, EventName extends keyof HTMLElementEventMap>(element: ElementType, eventName: EventName, handler: ValueLinkToEvent): void {
        element.addEventListener(eventName, handler);
        this._links.push({ element, eventName, handler });
    }

    private _onUpdateHandler(prevValue: ValueType, currentValue: ValueType) {
        this._callbacks.forEach((callback) => callback(prevValue, currentValue))
    }
}