import './style.css';
import { CreatorWidgetPresenter } from './widget/creator-widget/creator-widget.presenter';
import { SettingsWidgetPresenter } from "./widget/settings-widget/settings-widget.presenter";

const app = document.querySelector('#app');
if (app) {
    const settingsWidget = new SettingsWidgetPresenter();
    const creatorWidget = new CreatorWidgetPresenter();
    settingsWidget.render('afterbegin', app);
    creatorWidget.render('beforeend', app);
}