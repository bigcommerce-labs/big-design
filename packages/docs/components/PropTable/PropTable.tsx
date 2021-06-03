import { H3, Link, Small, Table, TableFigure, Text, Panel } from '@bigcommerce/big-design';
import React, { FC, ReactNode } from 'react';

import { Code } from '../Code';
import { Collapsible } from '../Collapsible';

interface TypesDataProps {
  types: any;
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
  title: string;
  propList: Prop[];
  renderAsContent?: boolean;
  inheritedProps?: ReactNode;
}

export type PropTableWrapper = Partial<PropTableProps>;

export const PropTable: FC<PropTableProps> = (props) => {
  const { collapsible, id, propList: items, title, renderAsContent, inheritedProps } = props;

  const renderTable = () => (
    <TableFigure marginBottom={renderAsContent || collapsible || inheritedProps ? 'xLarge' : 'none'}>
      <Table
        columns={[
          {
            header: 'Prop Name',
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
        items={items}
      />

      <Small marginTop="xSmall">Props ending with * are required</Small>
    </TableFigure>
  );

  const renderContent = renderAsContent ? (
    <>
      <H3 id={id}>{title}</H3>
      {renderTable()}
      {inheritedProps ? (
        <>
          <H3>Inherited</H3>
          {inheritedProps}
        </>
      ) : null}
    </>
  ) : (
    <Panel header={title} id={id}>
      {renderTable()}
      {inheritedProps ? (
        <>
          <H3>Inherited</H3>
          {inheritedProps}
        </>
      ) : null}
    </Panel>
  );

  return collapsible ? <Collapsible title={`${title} Props`}>{renderTable()}</Collapsible> : <>{renderContent}</>;
};

const TypesData: React.FC<TypesDataProps> = (props): any => {
  const { types } = props;

  if (Array.isArray(types)) {
    return types.map((type, index) => {
      return (
        <React.Fragment key={type}>
          {type.type === Link ? <Code highlight={false}>{type}</Code> : <Code>{type}</Code>}
          {index < types.length - 1 ? ' | ' : null}
        </React.Fragment>
      );
    });
  }

  return types.type === Link ? <Code highlight={false}>{types}</Code> : <Code>{types}</Code>;
};
