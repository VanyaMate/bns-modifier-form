export interface IComponentView<Tag extends keyof HTMLElementTagNameMap> {
    insert(position: InsertPosition, to: Element): void;
    remove(): void;
    inDocument(): boolean;
    getElement(): HTMLElementTagNameMap[Tag];
}