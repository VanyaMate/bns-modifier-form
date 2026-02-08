import { LocalOptionService } from './service/options/local-option.service';
import type { IOptionService } from './service/options/option-service.interface';
import './style.css';
import { CreatorWidgetPresenter } from './widget/creator-widget/creator-widget.presenter';
import { OptionSettingsCreateFormPresenter } from './widget/option-settings/option-settings-create-form/option-settings-create-form.presenter';
import { OptionSettingsTablePresenter } from "./widget/option-settings/option-settings-table/option-settings-table.presenter";

export const optionService: IOptionService = new LocalOptionService();

const app = document.querySelector('#app');
if (app) {
    optionService.getOptions().then((options) => {
        console.log(options.get());
        const createOption = new OptionSettingsCreateFormPresenter(optionService);
        const optionsTable = new OptionSettingsTablePresenter(options);
        const creatorWidget = new CreatorWidgetPresenter();
        createOption.render('beforeend', app);
        optionsTable.render('beforeend', app);
        creatorWidget.render('beforeend', app);
    });
}