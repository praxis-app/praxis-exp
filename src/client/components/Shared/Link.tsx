import { Link as MuiLink, SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  href: string;
  leftSpace?: boolean;
  sx?: SxProps;
}

const Link = ({ children, disabled, href, leftSpace, sx }: Props) => (
  <ReactRouterLink to={href}>
    <MuiLink
      href={href}
      sx={{
        color: 'text.primary',
        pointerEvents: disabled ? 'none' : undefined,
        textDecoration: 'none',
        ...sx,
      }}
    >
      {leftSpace ? ' ' : ''}
      {children}
    </MuiLink>
  </ReactRouterLink>
);

export default Link;
