import styled from 'styled-components';

import { Container } from '~/styles/container';

export const Background = styled('div')`
  width: 100%;
  background: ${(props) => props.theme.palette.primary.main};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.palette.secondary.main} 0%,
    ${(props) => props.theme.palette.primary.main} 100%
  );
  color: ${(props) => props.theme.palette.primary.contrastText};
  padding: 2rem 0;
`;

export const MainInfo = styled('div')`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 767.98px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 767.98px) {
    align-items: center;
  }
`;

export const AssetContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767.98px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Rank = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  font: ${(props) => props.theme.font.heading};
  font-size: 1.5rem;
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  text-transform: uppercase;
`;

export const NameAndPrice = styled('div')`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  font: ${(props) => props.theme.font.heading};
  font-size: 1.5rem;
  text-transform: uppercase;
  @media (max-width: 767.98px) {
    align-items: center;
  }
`;

export const ChangePercent = styled('span')<{ changeSign: boolean }>`
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  color: ${(props) =>
    props.changeSign
      ? props.theme.palette.common.green
      : props.theme.palette.common.red};
  margin-left: 1rem;
`;

export const AdditionalInfo = styled('div')`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767.98px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const AdditionalInfoItem = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const AdditionalInfoItemTitle = styled('div')`
  font: ${(props) => props.theme.font.body};
  text-transform: uppercase;
`;

export const AdditionalInfoItemValue = styled('div')`
  font: ${(props) => props.theme.font.heading};
  font-size: 1.5rem;
`;
