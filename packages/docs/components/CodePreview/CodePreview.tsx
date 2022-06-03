import { transform } from '@babel/standalone';
import * as BigDesign from '@bigcommerce/big-design';
import * as BigDesignIcons from '@bigcommerce/big-design-icons';
import clipboardCopy from 'clipboard-copy';
import parser from 'prettier/parser-babel';
import { format } from 'prettier/standalone';
import React, { useContext, useEffect, useState } from 'react';
import { LiveEditor, LivePreview, LiveProvider } from 'react-live';
import styled from 'styled-components';

import { SnippetControls } from '../SnippetControls';
import { CodeEditorContext, Language } from '../StoryWrapper/StoryWrapper';

import { StyledLiveError } from './styled';

const defaultScope = {
  ...BigDesign,
  ...BigDesignIcons,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  React,
  useEffect,
  useState,
  styled,
};

function getInitialCode(children: React.ReactNode, language: Language): string {
  if (typeof children !== 'string') {
    throw new Error('<CodePreview> children must be of type string');
  }

  if (language === 'tsx') {
    return children;
  }

  // @ts-expect-error babel type error
  const code: string = transform(children, {
    compact: false,
    retainLines: true,
    presets: [['typescript', { allExtensions: true, isTSX: true, jsxPragma: 'preserve' }]],
  }).code;

  return format(code, {
    parser: 'babel',
    plugins: [parser],
    printWidth: 100,
    singleQuote: true,
    trailingComma: 'all',
  });
}

function transformCode(input: string): string {
  try {
    // @ts-expect-error babel type error
    return transform(input, {
      presets: [['typescript', { allExtensions: true, isTSX: true }], 'react'],
    }).code;
  } catch (e) {
    return input;
  }
}

export interface CodePreviewProps {
  scope?: { [key: string]: unknown };
}

export const CodePreview: React.FC<CodePreviewProps> = (props) => {
  const { children, scope: propsScope } = props;
  const { theme: editorTheme, language } = useContext(CodeEditorContext);

  const initialCode = getInitialCode(children, language);
  const [code, setCode] = useState(initialCode);
  const [scope, setScope] = useState({ ...defaultScope, ...propsScope });

  useEffect(() => {
    setScope({ ...defaultScope, ...propsScope });
  }, [propsScope, setScope]);

  useEffect(() => {
    setCode(getInitialCode(children, language));
  }, [children, language, setCode]);

  return (
    <BigDesign.Box border="box">
      <LiveProvider
        code={code}
        language={language}
        scope={scope}
        theme={editorTheme}
        transformCode={transformCode}
      >
        <BigDesign.Box backgroundColor="white" borderBottom="box" padding="medium">
          <LivePreview />
        </BigDesign.Box>
        <SnippetControls
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          copyToClipboard={() => clipboardCopy(code)}
          resetCode={() => setCode(initialCode)}
        />
        <LiveEditor onChange={setCode} />
        <StyledLiveError />
      </LiveProvider>
    </BigDesign.Box>
  );
};
