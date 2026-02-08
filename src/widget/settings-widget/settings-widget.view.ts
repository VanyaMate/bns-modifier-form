import { ComponentView } from "../../shared/component/component.view";

export class SettingsWidgetView extends ComponentView<'div'> {
    constructor() {
        super('div', { html: 'settings' });
    }
}