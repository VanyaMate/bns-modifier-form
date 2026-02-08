export interface IComponentView {
    insert(position: InsertPosition, to: Element): void;
    remove(): void;
    inDocument(): boolean;
    getElement(): Element;
}