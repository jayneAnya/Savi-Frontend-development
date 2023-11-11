import React from "react";
import "../../assets/scss/headerNav.scss";
import Forminput from "./Forminput";
import SearchIcon from "../../assets/svg/search-icon.svg";
import Avater from "../../assets/svg/Avater.svg";
import { useNavigate } from "react-router-dom";
import { useGetProfile } from "../../hooks/useGetProfile";
import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import { UploadProfilePic } from "../Modals";

export const HeaderNav = () => {
  const { data: profile } = useGetProfile();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="header-nav">
      <Forminput
        leftIcon={SearchIcon}
        placeholder="Search"
        inputtype="text"
        borderRadius="100px"
      />
      <Menu>
        <MenuButton>
          <div className="header-nav__avatar">
            <Avatar bg="#b5179e" />
            <p className="header-nav__avatar--text"> {`
          ${profile?.firstName}`}</p>
          </div>
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              onOpen();
            }}
          >
            Upload Picture
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/password-reset2");
            }}
          >
            Change Password
          </MenuItem>
        </MenuList>
      </Menu>
      <UploadProfilePic isOpen={isOpen} onClose={onClose} />
    </div>
  );
};
