import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;
@media only screen and (max-width: 548px) {
  padding: 15px;
}
@media only screen and (max-width: 1440px) {
  padding-left: 5%;
  padding-right: 5%;
}
`;
