import React, { ComponentPropsWithoutRef, memo } from 'react';

import { warning } from '../../utils';

import { StyledTab, StyledTabs } from './styled';

export interface TabItem {
  ariaControls?: string;
  id: string;
  title: string;
  disabled?: boolean;
}

export interface TabsProps extends ComponentPropsWithoutRef<'div'> {
  activeTab?: TabItem['id'];
  children?: React.ReactNode;
  items?: TabItem[];
  onTabClick?(tabId: TabItem['id']): void;
}

export const Tabs: React.FC<TabsProps> = memo(
  ({ activeTab, children, className, items = [], onTabClick, style, role, ...props }) => {
    const handleOnTabClick = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();

      const tabId = event.currentTarget.id;

      if (tabId !== activeTab && typeof onTabClick === 'function') {
        onTabClick(tabId);
      }
    };

    const activeItem = activeTab && items[Number(activeTab)];
    const missingAriaControls = items.some((item) => !item.ariaControls);
    const missingFallback =
      activeItem && !document.getElementById(activeItem.ariaControls || `${activeItem.id}-content`);

    if (missingAriaControls || missingFallback) {
      warning(
        'TabItems must have an ariaControls field, otherwise, an element with fallback ID "{tab.id}-content" must exist in the DOM',
      );
    }

    return (
      <StyledTabs {...props} flexDirection="row" role="tablist">
        {items.map(({ ariaControls, id, title, disabled }) => (
          <StyledTab
            activeTab={activeTab}
            aria-controls={ariaControls || `${id}-content`}
            aria-selected={id === activeTab ? 'true' : 'false'}
            disabled={disabled}
            id={id}
            key={id}
            onClick={handleOnTabClick}
            role="tab"
            tabIndex={id === activeTab ? -1 : 0}
          >
            {title}
          </StyledTab>
        ))}
      </StyledTabs>
    );
  },
);

Tabs.displayName = 'Tabs';
