/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { View } from '~/shared/styles';

export type StackProps = {};

const style = {
  paddingLeft: 6,
  paddingRight: 6,
  borderColor: '#f8d0E6',
  borderRadius: 3,
  flexGrow: 0,
  color: '#2b2b2b',
};

const Stack = ({ children }: React.PropsWithChildren<StackProps>) => (
  <View css={style}>
    <React.Fragment>{children}</React.Fragment>
  </View>
);

export default Stack;
