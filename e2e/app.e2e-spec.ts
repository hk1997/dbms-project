import { DbmsPage } from './app.po';

describe('dbms App', () => {
  let page: DbmsPage;

  beforeEach(() => {
    page = new DbmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
