import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

export const DropdownLabel = styled.label`
  text-align: center;
  font-size: 25px;
  padding-bottom: 5px;
  margin-top: 15px;
`;

export const ChosenDropdownOption = styled.span`
  border: 2.2px solid
    ${(props) => (props.isDropdownOpen ? 'rgb(38, 132, 255)' : 'rgb(204, 204, 204)')};
  border-radius: 6px;
  background-color: #f2f2f2;
  line-height: 40px;
  transition: all 0.1s ease;
  color: ${(props) => (props.children === 'Select' ? 'rgb(154, 154, 154)' : '')};

  &:hover {
    border-color: ${(props) => (props.isDropdownOpen ? 'rgb(38, 132, 255)' : 'rgb(184, 184, 184)')};
  }
`;

export const DropdownSelect = styled.div`
  width: 120px;
  margin: auto;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  max-height: 450px; /* you can change as you need it */
  overflow: auto; /* to get scroll */
`;

export const DropdownOption = styled.span`
  cursor: pointer;
  &:hover {
    background-color: rgb(184, 184, 184);
  }
`;

export const DropdownOptionSelect = styled(DropdownOption)`
  color: rgb(114, 114, 114);
  :after {
    content: '';
    display: block;
    width: 30%;
    margin: auto;
    border-bottom: solid;
    border-color: rgb(174, 174, 174);
  }
`;

export const DropdownSelectInner = styled.div`
  margin-top: 6px;
  flex-direction: column;
  display: ${(props) => (props.isDropdownOpen ? 'flex' : 'none')};
  border: 1px solid rgb(154, 154, 154);
  background-color: #f2f2f2;
  line-height: 40px;
  border-radius: 6px;
  z-index: 999;
  /* padding-bottom: 205px; */
  max-height: 200px;
  overflow: auto; /* to get scroll */
`;
