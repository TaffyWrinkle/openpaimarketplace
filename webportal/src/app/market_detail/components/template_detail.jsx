// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getTheme, Stack, Text } from 'office-ui-fabric-react';
import React from 'react';
import PropTypes from 'prop-types';
import StorageCard from './storage_card';
import styled from 'styled-components';
import { isEmpty } from 'lodash';

const { spacing, palette } = getTheme();

const Wrapper = styled.div`
  background-color: ${palette.neutralLighterAlt};
  padding: ${spacing.m};
`;

const TemplateDetail = props => {
  const { marketItem } = props;

  return (
    <Stack gap='m'>
      <Text variant='xLarge'>Docker Image:</Text>
      <Wrapper>
        <Text variant='large'>{marketItem.content.dockerImage}</Text>
      </Wrapper>
      <Text variant='xLarge'>Ports:</Text>
      <Wrapper>
        {isEmpty(marketItem.content.ports) ? (
          <Text>There is no ports setting</Text>
        ) : (
          <Stack horizontal gap='s1'>
            {marketItem.content.ports.map(port => (
              <Text key={port}>{port}</Text>
            ))}
          </Stack>
        )}
      </Wrapper>
      <Text variant='xLarge'>Data Storage:</Text>
      <StorageCard storage={marketItem.content.dataStorage} />
      <Text variant='xLarge'>Code Storage:</Text>
      <StorageCard storage={marketItem.content.codeStorage} />
      <Text variant='xLarge'>Output Storage:</Text>
      <StorageCard storage={marketItem.content.outputStorage} />
      <Text variant='xLarge'>Commands:</Text>
      <Wrapper>
        <Stack gap='s2'>
          {marketItem.content.commands.map(command => (
            <Text key={command}>{command}</Text>
          ))}
        </Stack>
      </Wrapper>
    </Stack>
  );
};

TemplateDetail.propTypes = {
  marketItem: PropTypes.object,
};

export default TemplateDetail;
