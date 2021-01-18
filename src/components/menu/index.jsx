import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation, useHistory } from "react-router-dom";

const MenuMobile = () => {
  const location = useLocation();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {location.pathname === "/" && (
          <span>
            <MenuItem onClick={() => history.push("/")}>Perfil</MenuItem>
            <MenuItem onClick={() => history.push("/login")}>Login</MenuItem>
            <MenuItem onClick={() => history.push("/register")}>
              Cadastro
            </MenuItem>
          </span>
        )}
        {location.pathname === "/donor" && (
          <span>
            <MenuItem onClick={() => history.push("/profile")}>Perfil</MenuItem>
            <MenuItem onClick={() => history.push("/my-animals")}>
              Meus animais
            </MenuItem>
            <MenuItem onClick={() => history.push("/humans")}>
              Humanos interessados
            </MenuItem>
          </span>
        )}
        {location.pathname === "/adopter" && (
          <span>
            <MenuItem onClick={() => history.push("/profile")}>Perfil</MenuItem>
            <MenuItem onClick={() => history.push("/animals")}>
              Animais
            </MenuItem>
            <MenuItem onClick={() => history.push("/favorites")}>
              Quero adotar
            </MenuItem>
          </span>
        )}
      </Menu>
    </div>
  );
};

export default MenuMobile;
