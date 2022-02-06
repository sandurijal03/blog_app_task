import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Home from '..';

describe('HomeTest', () => {
  it('should be outer parent element to be true', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <Home />
      </MockedProvider>,
    );
    const tree = component.toJSON();
    expect(tree.type).toBe('div');
  });

  it('should true', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <Home />
      </MockedProvider>,
    );
    const tree = component.toJSON();
    console.log(tree.children);
    expect(tree.type).toBe('div');
  });
});
