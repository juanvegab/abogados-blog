import { BlogAbogadosPage } from './app.po';

describe('blog-abogados App', function() {
  let page: BlogAbogadosPage;

  beforeEach(() => {
    page = new BlogAbogadosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
