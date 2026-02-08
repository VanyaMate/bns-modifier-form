export interface IComponentPresenter {
    render(position: InsertPosition, to: Element): void;
    remove(): void;
}