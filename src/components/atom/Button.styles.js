import styled from 'styled-components'


export const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  text-align: center;
  border-radius: 40px;
  border: none;
  background-color: ${({ theme, $isSecondary }) => $isSecondary ? theme.color.additional : theme.color.main};
  color: ${({ theme, $white }) => $white ? theme.color.main :  theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 500;
  margin: 10px;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: ${({ theme, $isRed, $isSecondary }) =>
      $isRed ? theme.color.red : $isSecondary ? theme.color.success : theme.color.additional
    };
  }
  color: ${({ theme, $red }) => $red ? theme.color.white :  theme.color.white};
  cursor: pointer;
}
  
`
