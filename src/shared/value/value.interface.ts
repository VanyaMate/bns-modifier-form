export type ValueUpdateHandlerUnsubscribe = () => void;
export type ValueUpdateHandler<ValueType> = (prev: ValueType, current: ValueType) => void;
export type ValueLinkToEvent = EventListenerOrEventListenerObject;

export interface IValue<ValueType> {
    onUpdate(callback: ValueUpdateHandler<ValueType>): ValueUpdateHandlerUnsubscribe;
    linkTo<ElementType extends HTMLElement, EventName extends keyof HTMLElementEventMap>(element: ElementType, eventName: EventName, handler: ValueLinkToEvent): void;
    set(value: ValueType): void;
    get(): ValueType;
    dispose(): void;
}