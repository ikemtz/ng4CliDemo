import { browser, element, by } from 'protractor';

export class Ng4CliDemoPage {
  navigateTo() {
    return browser.get('/');
  }
setName(t: string) {
element(by.id('name')).sendKeys(t);
}
getNameText() {
    return element(by.id('list-name')).getText();
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
