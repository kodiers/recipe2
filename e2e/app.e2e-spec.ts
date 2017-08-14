import { Recipe2Page } from './app.po';

describe('recipe2 App', () => {
  let page: Recipe2Page;

  beforeEach(() => {
    page = new Recipe2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
