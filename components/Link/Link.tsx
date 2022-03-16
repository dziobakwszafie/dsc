import { FC, forwardRef, ReactNode } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/system';

interface CommonLinkProps {
  children: ReactNode;
  variant?: 'nav' | 'standard';
}

export interface LinkProps extends CommonLinkProps {
  href: string;
  target?: string;
  rel?: string;
}

const linkStyles = ({ theme }: { theme: Theme }) => css`
  text-decoration: none;
  cursor: pointer;

  &.variant-nav {
    color: ${theme.palette.colors.main4};

    &:hover {
      color: ${theme.palette.colors.main5};
    }
  }

  &.variant-standard {
    color: ${theme.palette.colors.main4};

    &:hover {
      color: ${theme.palette.colors.main5};
    }
  }
`;

const StyledLink = styled.a`
  ${linkStyles}
`;

const Link: FC<LinkProps> = forwardRef<HTMLAnchorElement, LinkProps>(function Link(props, ref) {
  const { href, children, variant = 'standard', ...rest } = props;

  return (
    <StyledLink {...rest} href={href} ref={ref} className={`variant-${variant}`}>
      {children}
    </StyledLink>
  );
});

export default Link;
