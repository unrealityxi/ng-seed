import { TofPage } from './app.po';

describe('tof App', function() {
  let page: TofPage;

  beforeEach(() => {
    page = new TofPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
