import { Flex, H3, Link, Small, Table, TableFigure, Text } from '@bigcommerce/big-design';
import React, { FC, ReactNode } from 'react';

import { Code } from '../Code';
import { Collapsible } from '../Collapsible';

interface TypesDataProps {
  types: unknown;
}

export interface Prop {
  name: ReactNode;
  types: ReactNode | ReactNode[];
  defaultValue?: ReactNode;
  description: ReactNode;
  required?: boolean;
}

export interface PropTableProps {
  collapsible?: boolean;
  id?: string;
  inheritedProps?: ReactNode;
  nativeElement?: [string, 'most' | 'all'];
  propList: Prop[];
  title: string;
}

export type PropTableWrapper = Partial<PropTableProps>;

const TypesData: React.FC<TypesDataProps> = (props): JSX.Element => {
  const { types } = props;

  if (Array.isArray(types)) {
    // @ts-expect-error refactor types
    return types.map((type, index) => {
      return (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        <React.Fragment key={type.key ?? index}>
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
          {type.type === Link ? <Code highlight={false}>{type}</Code> : <Code>{type}</Code>}
          {index < types.length - 1 ? ' | ' : null}
        </React.Fragment>
      );
    });
  }

  // @ts-expect-error refactor types
  return types.type === Link ? <Code highlight={false}>{types}</Code> : <Code>{types}</Code>;
};

export const PropTable: FC<PropTableProps> = (props) => {
  const { collapsible, id, propList: items, title, inheritedProps, nativeElement } = props;

  const renderTable = () => {
    if (items.length > 0) {
      return (
        <TableFigure marginBottom={collapsible || inheritedProps ? 'xLarge' : 'none'}>
          <Table
            columns={[
              {
                header: 'Prop name',
                hash: 'propName',
                render: ({ name, required }) => (
                  <>
                    <Code primary>{name}</Code>
                    {required ? <b> *</b> : null}
                  </>
                ),
              },
              {
                header: 'Type',
                hash: 'type',
                render: ({ types }) => <TypesData types={types} />,
              },
              {
                header: 'Default',
                hash: 'default',
                render: ({ defaultValue }) => <Code highlight={false}>{defaultValue}</Code>,
              },
              {
                header: 'Description',
                hash: 'description',
                width: '50%',
                render: ({ description }) => <Text>{description}</Text>,
              },
            ]}
            id={id}
            items={items}
          />

          <Small marginTop="xSmall">Props ending with * are required</Small>
        </TableFigure>
      );
    }

    return null;
  };

  const renderNativeElement = () => {
    if (nativeElement) {
      const [element, supported] = nativeElement;

      return (
        <Text>
          Supports {supported} native <Code>&lt;{element} /&gt;</Code> element attributes.
        </Text>
      );
    }

    return null;
  };

  const renderContent = () => {
    return (
      <>
        {renderNativeElement()}
        {renderTable()}
        {inheritedProps ? (
          <>
            <H3>Inherited</H3>
            <Flex flexDirection="column">{inheritedProps}</Flex>
          </>
        ) : null}
      </>
    );
  };

  if (collapsible) {
    return <Collapsible title={`${title} Props`}>{renderTable()}</Collapsible>;
  }

  return renderContent();
};
