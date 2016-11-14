import { GuesserA2Page } from './app.po';

describe('guesser-a2 App', function() {
  let page: GuesserA2Page;

  beforeEach(() => {
    page = new GuesserA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
