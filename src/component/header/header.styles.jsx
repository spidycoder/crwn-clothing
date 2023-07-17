import { styled, css } from "styled-components";
import { NavLink } from "react-router-dom";

// this is created as this style is used by two classes so we wrote it in a seperate way
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;
//these two are using the above written OptionContainerStyles
export const OptionLink = styled(NavLink)`
  ${OptionContainerStyles}
`;
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const NavLinkContainer = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
