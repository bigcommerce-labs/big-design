'use client';

import React, { HTMLAttributes, memo } from 'react';

import { MarginProps } from '../../mixins';

import { StyledBadge } from './styled';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, MarginProps {
  label: string;
  variant?: 'danger' | 'secondary' | 'success' | 'warning' | 'primary';
}

export const Badge: React.FC<BadgeProps> = memo(({ className, style, label, ...props }) =>
  typeof label === 'string' ? <StyledBadge {...props}>{label}</StyledBadge> : null,
);

Badge.displayName = 'Badge';
