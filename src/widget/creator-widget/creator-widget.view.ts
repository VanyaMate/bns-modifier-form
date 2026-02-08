import { ComponentView } from "../../shared/component/component.view";

export class CreatorWidgetView extends ComponentView<'div'> {
    constructor() {
        super('div', { html: 'creator' });
    }
}