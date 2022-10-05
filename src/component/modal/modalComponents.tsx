import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

interface styleProps {
  theme: {[k: string]: string};
}

const {width, height} = Dimensions.get('window');

export const Separator = styled.View`
  height: 0.3px;
  width: ${width * 0.85 - 30}px;
  background-color: ${(props: styleProps) => props.theme.placeholder};
  align-self: center;
  margin: 10px 0px;
`;

export const ModalContainer = styled.View`
  height: ${height * 0.6}px;
  width: 85%;
  background-color: ${(props: styleProps) => props.theme.main};
  border-radius: 15px;
  overflow: hidden;
  padding: 0px 10px;
  border-width: 4px;
  border-color: ${(props: styleProps) => props.theme.modalMain};
`;
export const SectionBox = styled.View`
  justify-content: center;
  align-items: center;
  height: ${(props: {height: number}) => `${props.height}px`};
`;
export const Title = styled.Text`
  color: ${(props: {theme: {[k: string]: string}}) => props.theme.modalMain};
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;

  font-style: italic;
`;
