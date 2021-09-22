import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 50%;
  :focus {
    border: 3px solid #555;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 5px 10px;
  margin-left: 10px;
  font-size: 14px;
  width: 100px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;

  :hover {
    background-color: #3e8e41;
  }
  :active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
