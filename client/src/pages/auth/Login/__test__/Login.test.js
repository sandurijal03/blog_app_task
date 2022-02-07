import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import Login from '../index';
import { BrowserRouter } from 'react-router-dom';

const MockLogin = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe('LoginTest', () => {
  it('should be outer parent element to be true', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <MockLogin />
      </MockedProvider>,
    );
    const tree = component.toJSON();
    expect(tree.type).toBe('div');
  });

  it('should be second element after header to be form', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <MockLogin />
      </MockedProvider>,
    );
    const form = component.toJSON().children[0].type;
    expect(form).toBe('form');
  });

  it('should be input the first child of form', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <MockLogin />
      </MockedProvider>,
    );
    const input = component.toJSON().children[0].children[0].type;
    expect(input).toBe('input');
  });

  it('should be div the second child of form', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <MockLogin />
      </MockedProvider>,
    );
    const div = component.toJSON().children[0].children[1].type;
    expect(div).toBe('div');
  });

  it('should be input the second child of div', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <MockLogin />
      </MockedProvider>,
    );
    const input = component.toJSON().children[0].children[1].children[0].type;
    expect(input).toBe('input');
  });

  it('should be div the third child of form', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <MockLogin />
      </MockedProvider>,
    );
    const div = component.toJSON().children[0].children[2].type;
    expect(div).toBe('div');
  });

  it('should be button the first child of third div', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <MockLogin />
      </MockedProvider>,
    );
    const button = component.toJSON().children[0].children[2].children[0].type;
    expect(button).toBe('button');
  });
});
