import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('should capitalize the first letter of a string', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('string')).toEqual('String');
  });
});
