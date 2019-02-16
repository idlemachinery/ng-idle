import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  it('should trim leading spaces from a string', () => {
    const pipe = new TrimPipe();
    expect(pipe.transform('  string')).toEqual('string');
  });

  it('should trim trailing spaces from a string', () => {
    const pipe = new TrimPipe();
    expect(pipe.transform('string  ')).toEqual('string');
  });
});
