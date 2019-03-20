import 'jest-styled-components';
import React from 'react';
import { render } from 'react-testing-library';

import { Panel } from './Panel';

test('render panel', () => {
  const { container } = render(
    <Panel>
      Dolore proident eiusmod sint est enim laboris anim minim quis ut adipisicing consectetur officia ex. Ipsum eiusmod
      fugiat amet pariatur culpa tempor aliquip tempor nisi. Irure esse deserunt nostrud ipsum id adipisicing enim velit
      labore. Nulla exercitation laborum laboris Lorem irure sit esse nulla mollit aliquip consectetur velit
    </Panel>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('does not forward styles', () => {
  const { container } = render(
    <Panel className="test" style={{ background: 'red' }}>
      Dolore proident eiusmod sint est enim laboris anim minim quis ut adipisicing consectetur officia ex. Ipsum eiusmod
      fugiat amet pariatur culpa tempor aliquip tempor nisi. Irure esse deserunt nostrud ipsum id adipisicing enim velit
      labore. Nulla exercitation laborum laboris Lorem irure sit esse nulla mollit aliquip consectetur velit
    </Panel>,
  );

  expect(container.getElementsByClassName('test').length).toBe(0);
  expect(container.firstChild).not.toHaveStyle('background: red');
});
