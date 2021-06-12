import { Box, Flex, H1, Panel, Tabs, Text } from '@bigcommerce/big-design';
import React, { useContext } from 'react';
import styled from 'styled-components';

import { ActiveTabContext, CodePreview } from '../../components';
import { BoxPropTable, DisplayPropTable, MarginPropTable, PaddingPropTable } from '../../PropTables';

const BoxPage = () => {
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const tabItems = [
    { id: 'examples', title: 'Examples' },
    { id: 'code', title: 'Code' },
  ];

  const renderTabs = () => {
    switch (activeTab) {
      case 'code':
        return (
          <BoxPropTable
            inheritedProps={
              <>
                <DisplayPropTable collapsible />
                <MarginPropTable collapsible />
                <PaddingPropTable collapsible />
              </>
            }
          />
        );
      case 'examples':
      default:
        return (
          <>
            <Panel>
              <CodePreview>
                {/* jsx-to-string:start */}
                <Box backgroundColor="secondary20" border="box" borderRadius="normal" padding="medium">
                  Boxed content
                </Box>
                {/* jsx-to-string:end */}
              </CodePreview>
            </Panel>
            <Panel header="Shadows">
              <Text>Box also supports multiple shadows, here is an example of how they look like:</Text>
              <CodePreview>
                {/* jsx-to-string:start */}
                <Flex justifyContent="space-around">
                  <Box backgroundColor="secondary10" padding="xxLarge" shadow="floating">
                    Floating
                  </Box>
                  <Box backgroundColor="secondary10" padding="xxLarge" shadow="raised">
                    Raised
                  </Box>
                </Flex>
                {/* jsx-to-string:end */}
              </CodePreview>
            </Panel>
            <Panel header="Extending">
              <Text>
                Box is extendable, here is an example on how to create an Avatar component extending from Box with a
                couple of extra styles:
              </Text>
              <CodePreview>
                {/* jsx-to-string:start */}
                {function Avatar() {
                  const StyledBox = styled(Box)`
                    box-sizing: content-box;
                    height: ${({ theme }) => theme.spacing.large};
                    width: ${({ theme }) => theme.spacing.large};
                  `;

                  return (
                    <StyledBox backgroundColor="secondary20" border="box" borderRadius="circle" padding="medium">
                      BC
                    </StyledBox>
                  );
                }}
                {/* jsx-to-string:end */}
              </CodePreview>
            </Panel>
          </>
        );
    }
  };

  return (
    <>
      <H1>Box</H1>
      <Text>Used as a simple container or as a base to build other components.</Text>

      <Tabs activeTab={activeTab} items={tabItems} onTabClick={setActiveTab} />

      {renderTabs()}
    </>
  );
};

export default BoxPage;
