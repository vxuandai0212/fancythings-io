import styled from 'styled-components';

export const TocHeading = styled.h1`
cursor: default;
font-family: 'Roboto';
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #515151;
`;
export const TocSubHeading = styled.h1<{ active: boolean }>`
cursor: pointer;
font-family: 'Roboto';
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: ${props => props.active ? '#8A7783' : '#515151'};
&:hover {
  color: #8A7783;
}
`;
export const ArticleTitle = styled.h1`
cursor: default;
font-family: 'Roboto';
font-weight: 700;
font-size: 24px;
line-height: 32px;
color: #515151;
`;
export const ArticleCreatedDate = styled.h1`
cursor: default;
font-family: 'Roboto';
font-weight: 400;
font-size: 18px;
line-height: 32px;
color: #8A7783;
`;
export const ArticleContentHeading = styled.h1`
cursor: default;
font-family: 'Roboto';
font-weight: 700;
font-size: 20px;
line-height: 32px;
color: #515151;
margin-top: 20px;
margin-bottom: 20px;
`;
export const ArticleContentParagraph = styled.h1`
cursor: default;
font-family: 'Roboto';
font-weight: 400;
font-size: 18px;
line-height: 32px;
color: #515151;
`;
export const RelateArticle = styled.h1`
cursor: default;
font-family: 'Roboto';
font-weight: 900;
font-size: 18px;
line-height: 21px;
color: #515151;
`;