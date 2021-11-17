import * as React from "react";
import styled from "styled-components/macro";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/actions/languageActions";
import { AppStateType } from "../redux/reducers";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Flag = styled.img`
  border-radius: 50%;
  width: 22px;
  height: 22px;
`;

function LanguagesDropdown() {
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector(
    (state: AppStateType) => state.languageReducer
  );
  const [anchorMenu, setAnchorMenu] = React.useState<any>(null);
  const [ko, setKo] = React.useState("ko");
  const [en, setEn] = React.useState("en");

  const handleClickEn = React.useCallback(() => {
    dispatch(setLanguage(en));
    // setAnchorMenu(false);
    // i18n.changeLanguage(lang);
  }, []);
  const handleClickKo = React.useCallback(() => {
    dispatch(setLanguage(ko));
    // setAnchorMenu(false);
    // i18n.changeLanguage(lang);
  }, []);

  const toggleMenu = (event: React.SyntheticEvent) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  return (
    <React.Fragment>
      <Tooltip title="Languages">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
        >
          {currentLanguage && currentLanguage === "ko" ? (
            <Flag src="/static/img/flags/kr.png" alt="Korean" />
          ) : (
            <Flag src="/static/img/flags/us.png" alt="English" />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={handleClickEn}>English</MenuItem>
        <MenuItem onClick={handleClickKo}>Korean</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default LanguagesDropdown;
