import { css } from 'styled-components';

const CommonTextStyles = css`
  color: ${({ theme }) => theme.colors.secondary70};
  margin: 0 0 ${({ theme }) => theme.spacing.medium};
`;

export const H0Styles = css`
  ${CommonTextStyles};
  font-size: ${({ theme }) => theme.typography.fontSize.xxxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraLight};
  line-height: ${({ theme }) => theme.lineHeight.xxxLarge};
  margin: 0 0 ${({ theme }) => theme.spacing.xLarge};
`;

export const H1Styles = css`
  ${CommonTextStyles};
  font-size: ${({ theme }) => theme.typography.fontSize.xxLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  line-height: ${({ theme }) => theme.lineHeight.xxLarge};
  margin: 0 0 ${({ theme }) => theme.spacing.xLarge};
`;

export const H2Styles = css`
  ${CommonTextStyles};
  font-size: ${({ theme }) => theme.typography.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.xLarge};
`;

export const H3Styles = css`
  ${CommonTextStyles};
  font-size: ${({ theme }) => theme.typography.fontSize.large};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight.large};
  margin: 0 0 ${({ theme }) => theme.spacing.small};
`;

export const H4Styles = css`
  ${CommonTextStyles};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  line-height: ${({ theme }) => theme.lineHeight.medium};
  margin: 0 0 ${({ theme }) => theme.spacing.xSmall};
`;

export const TextStyles = css`
  ${CommonTextStyles};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.medium};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SmallStyles = css`
  ${CommonTextStyles};
  color: ${({ theme }) => theme.colors.secondary60};
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.small};
  margin: 0 0 ${({ theme }) => theme.spacing.small};

  &:last-child {
    margin-bottom: 0;
  }
`;
