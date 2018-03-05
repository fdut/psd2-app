import { Psd2AppPage } from './app.po';

describe('psd2-app App', () => {
  let page: Psd2AppPage;

  beforeEach(() => {
    page = new Psd2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
