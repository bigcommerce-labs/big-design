import { Button, H1, H3, Link, Modal, Text, Panel } from '@bigcommerce/big-design';
import React, { useState } from 'react';

import { Code, CodePreview } from '../../components';
import { ModalPropTable } from '../../PropTables';

const ModalPage = () => (
  <>
    <H1>Modal</H1>

    <Panel>
      <Text>
        A modal appears as a layer on top of the primary interface. Modals disrupt users from interacting with the page
        until they complete a specific task.
      </Text>

      <CodePreview>
        {/* jsx-to-string:start */}
        {function Example() {
          const [isOpen, setIsOpen] = useState(false);

          return (
            <>
              <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

              <Modal
                actions={[
                  { text: 'Cancel', variant: 'subtle', onClick: () => setIsOpen(false) },
                  { text: 'Apply', onClick: () => setIsOpen(false) },
                ]}
                header="Modal Title"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeOnEscKey={true}
                closeOnClickOutside={false}
              >
                <Text>
                  Ea tempor sunt amet labore proident dolor proident commodo in exercitation ea nulla sunt pariatur.
                  Nulla sunt ipsum do eu consectetur exercitation occaecat labore aliqua. Aute elit occaecat esse ea
                  fugiat esse. Reprehenderit sunt ea ea mollit commodo tempor amet fugiat.
                </Text>
                <Text>
                  Esse ipsum est consectetur nulla aute deserunt. Anim sint nisi consequat officia adipisicing irure.
                  Nulla ea reprehenderit elit eu nostrud sunt veniam dolore ex occaecat qui. Commodo ullamco ut sint
                  dolor quis cillum in et enim culpa esse exercitation ad. Eiusmod adipisicing nisi culpa esse laborum
                  cupidatat ad pariatur proident. Consectetur ex sint ullamco non ex.
                </Text>
              </Modal>
            </>
          );
        }}
        {/* jsx-to-string:end */}
      </CodePreview>
      <H3>Dialog</H3>

      <Text>
        Setting the variant prop to <Code primary>dialog</Code> results in a simplified version of a Modal. The purpose
        of a dialog is to act as a safety net for a user attempting a destructive action.
      </Text>

      <CodePreview lastChild>
        {/* jsx-to-string:start */}
        {function Example() {
          const [isOpen, setIsOpen] = useState(false);

          return (
            <>
              <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>

              <Modal
                actions={[
                  { text: 'Cancel', variant: 'subtle', onClick: () => setIsOpen(false) },
                  { text: 'Apply', onClick: () => setIsOpen(false) },
                ]}
                header="Dialog Title"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                closeOnEscKey={true}
                closeOnClickOutside={false}
                variant="dialog"
              >
                <Text>
                  Ea tempor sunt amet labore proident dolor proident commodo in exercitation ea nulla sunt pariatur.
                </Text>
              </Modal>
            </>
          );
        }}
        {/* jsx-to-string:end */}
      </CodePreview>
    </Panel>

    <ModalPropTable />
  </>
);

export default ModalPage;
