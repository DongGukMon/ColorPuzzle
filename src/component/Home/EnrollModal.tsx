import styled from 'styled-components/native';
import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {enrollModalVisibleState, usernameState} from '../../atom/shared';
import ClosableModalLayout from '../ClosableModalLayout';
import InputUsername from './InputUsername';
import ShowUsername from './ShowUsername';
import {
  ModalContainer,
  SectionBox,
  Separator,
  Title,
} from '../modal/modalComponents';

interface styleProps {
  theme: {[k: string]: string};
}

const {width, height} = Dimensions.get('window');

const DescriptionSection = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

const DescriptionText = styled.Text`
  color: ${(props: styleProps) => props.theme.text};
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  margin-bottom: 10px;
`;

const DescriptionFooterText = styled.Text`
  color: ${(props: styleProps) => props.theme.placeholder};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const descriptionContent = '닉네임을 설정하고 랭킹에 참여해보세요.';
const descriptionContent2 = '닉네임만 설정하면 자동으로 기록이 랭크됩니다.';
const descriptionContent3 =
  '네이밍이 고민이시라면 인스타 아이디를 닉네임으로 설정하는 것도 방법이에요.';

const descriptionFooter =
  '공백은 입력하실 수 없어요. 입력시 모든 공백이 제거됩니다.';
const descriptionFooter2 = '부적절한 닉네임은 통보없이 삭제될 수 있습니다.';
const descriptionFooter3 =
  '랭킹 삭제를 원하시면 다음 메일로 연락주세요.(ehdrnr9346@gmail.com)';
const descriptionFooter4 =
  '개인정보처리방침: https://typical-twister-23b.notion.site/Sky-Tab-e129b157c7aa41c286f6ab1f794f539a';

const EnrollModal = () => {
  const [isVisible, setIsVisible] = useRecoilState(enrollModalVisibleState);
  const username = useRecoilValue(usernameState);

  const [edited, setEdited] = useState(false);

  useEffect(() => {
    //처음에 username이 공백이었다가 업데이트 되기 때문에 edited은 항상 false로 찍히고
    //그 초기값으로 렌더링되는 문제 해결을 위해
    setEdited(Boolean(username));
  }, [username]);

  return (
    <ClosableModalLayout isVisible={isVisible} setIsVisible={setIsVisible}>
      <ModalContainer>
        <SectionBox height={70}>
          <Title>Enter your nickname,</Title>
          <Title>Join the ranking</Title>
        </SectionBox>
        <Separator />

        <DescriptionSection>
          <View onStartShouldSetResponder={() => true}>
            <DescriptionText>{descriptionContent}</DescriptionText>
            <DescriptionText>{descriptionContent2}</DescriptionText>
            <DescriptionText>{descriptionContent3}</DescriptionText>
            <Separator style={{marginBottom: 20}} />
            <DescriptionFooterText>{descriptionFooter}</DescriptionFooterText>
            <DescriptionFooterText>{descriptionFooter2}</DescriptionFooterText>
            <DescriptionFooterText>{descriptionFooter3}</DescriptionFooterText>
            <DescriptionFooterText>{descriptionFooter4}</DescriptionFooterText>
          </View>
        </DescriptionSection>

        <SectionBox height={80}>
          {edited ? (
            <ShowUsername setEdited={setEdited} />
          ) : (
            <InputUsername setEdited={setEdited} />
          )}
        </SectionBox>
      </ModalContainer>
    </ClosableModalLayout>
  );
};
export default React.memo(EnrollModal);
