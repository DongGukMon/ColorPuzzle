import styled from 'styled-components/native';
import React from 'react';

const ModalContainer = styled.View`
  height: 350px;
  width: 85%;
  background-color: ${(props: {theme: {[k: string]: string}}) =>
    props.theme.main};
  border-radius: 15px;
  overflow: hidden;
  padding: 0px 10px;
  border-width: 4px;
  border-color: ${(props: {theme: {[k: string]: string}}) =>
    props.theme.modalMain};
`;

const EnrollModal = () => {};
export default EnrollModal;
