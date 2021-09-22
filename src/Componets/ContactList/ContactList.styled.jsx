import styled from '@emotion/styled';
export const Button = styled.button`
  display: inline-block;
  padding: 5px 5px;
  margin-left: 10px;
  font-size: 10px;
  width: 50px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  /* box-shadow: 0 9px #999; */

  :hover {
    background-color: red;
  }
  :active {
    background-color: red;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
