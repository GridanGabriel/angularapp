import { FacilitiesfrontendPage } from './app.po';

describe('facilitiesfrontend App', () => {
  let page: FacilitiesfrontendPage;

  beforeEach(() => {
    page = new FacilitiesfrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
