import styled from '@emotion/styled';
import { ReactNode } from 'react';

export const HorizontalContainer = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => <Container>{children}</Container>;

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
});
