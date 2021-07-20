import { Box, Flex, H1, Panel, Text } from '@bigcommerce/big-design';
import { ThemeInterface } from '@bigcommerce/big-design-theme';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { CodePreview, PageNavigation } from '../../components';

const COLORS_TO_OMIT = ['primary', 'secondary', 'danger', 'warning', 'success'];
type Colors = ThemeInterface['colors'];
type Color = keyof Colors;

const StyledColor = styled(Box)`
  height: ${({ theme }) => theme.helpers.remCalc(30)};
  width: ${({ theme }) => theme.helpers.remCalc(300)};
`;

const ColorsPage = () => {
  const { colors } = useContext(ThemeContext);

  const items = [
    {
      id: 'examples',
      title: 'Examples',
      render: () => (
        <>
          <Panel header="Applying to components">
            <Text>Colors can be used directly on some of our components that expect a color as a prop.</Text>

            <CodePreview>
              {/* jsx-to-string:start */}
              <Box backgroundColor="secondary20" padding="medium">
                Box example
              </Box>
              {/* jsx-to-string:end */}
            </CodePreview>
          </Panel>
          <Panel header="Applying to styles">
            <Text>You can also use the colors directly from the theme to style other components, for example:</Text>

            <CodePreview>
              {/* jsx-to-string:start */}
              {function Example() {
                const StyledBox = styled(Box)(({ theme }) => ({
                  backgroundColor: theme.colors.secondary20,
                  padding: theme.spacing.medium,
                }));

                return <StyledBox>StyledBox Example</StyledBox>;
              }}
              {/* jsx-to-string:end */}
            </CodePreview>
          </Panel>
        </>
      ),
    },
    {
      id: 'colors',
      title: 'Available colors',
      render: () => (
        <Panel header="Available colors">
          <Flex flexDirection="column">
            {getFilteredColors(colors).map((color) => (
              <Flex alignItems="center" key={color}>
                <StyledColor backgroundColor={color as Color} />
                <Text marginLeft="medium">{getColorLabel(color)}</Text>
              </Flex>
            ))}
          </Flex>
        </Panel>
      ),
    },
  ];

  return (
    <>
      <H1>Colors</H1>

      <PageNavigation items={items} />
    </>
  );
};

function getFilteredColors(colors: Colors) {
  return Object.keys(colors).filter((color) => !COLORS_TO_OMIT.includes(color));
}

function getColorLabel(color: string) {
  return color.includes('40') ? `${color} / ${color.replace('40', '')}` : color;
}

export default ColorsPage;
