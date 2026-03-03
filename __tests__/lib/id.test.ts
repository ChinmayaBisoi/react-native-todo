import { genId } from '../../lib/id';

describe('genId', () => {
  it('returns a string', () => {
    expect(typeof genId()).toBe('string');
  });

  it('returns unique ids', () => {
    const ids = new Set(Array.from({ length: 100 }, () => genId()));
    expect(ids.size).toBe(100);
  });

  it('includes timestamp and random segment', () => {
    const id = genId();
    expect(id).toMatch(/^\d+-[a-z0-9]+$/);
  });
});
