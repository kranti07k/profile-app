import { PostingModule } from "./PostingModule";

describe('PostingModule', () => {
  let postingModule: PostingModule;

  beforeEach(() => {
    postingModule = new PostingModule();
  });

  it('should create an instance', () => {
    expect(postingModule).toBeTruthy();
  });
});
