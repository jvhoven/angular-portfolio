import { Angular2Page } from './app.po';

describe('angular-2 App', function() {
  let page: Angular2Page;

  beforeEach(() => {
    page = new Angular2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-2 works!');
  });
});
