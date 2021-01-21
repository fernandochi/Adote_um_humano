import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation, useHistory } from "react-router-dom";

const MenuMobile = () => {
  const publicHeader = new RegExp("^(/register|/login|/$|/animals/*\\d*)$");
  const donorHeader = new RegExp("^/donor.*");
  const adopterHeader = new RegExp("^/adopter.*");
  const auth = JSON.parse(window.localStorage.getItem("auth"));
  const isDonor = JSON.parse(window.localStorage.getItem("isDonor"));
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
        {location.pathname.match(publicHeader) && (
          <span>
            <MenuItem onClick={() => history.push("/")}>Home</MenuItem>
            {auth ? (
              <>
                <MenuItem
                  onClick={() => {
                    history.push("/");
                    window.localStorage.clear();
                  }}
                >
                  Logout
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    if (isDonor === true) {
                      return history.push("/donor");
                    } else {
                      return history.push("/adopter");
                    }
                  }}
                >
                  Perfil
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={() => history.push("/login")}>
                  Login
                </MenuItem>
                <MenuItem onClick={() => history.push("/register")}>
                  Cadastro
                </MenuItem>{" "}
              </>
            )}
          </span>
        )}
        {location.pathname.match(donorHeader) && (
          <span>
            <MenuItem onClick={() => history.push("/donor")}>Perfil</MenuItem>
            <MenuItem onClick={() => history.push("/donor/my-animals")}>
              Meus animais
            </MenuItem>
            <MenuItem onClick={() => history.push("/donor/humans")}>
              Humanos interessados
            </MenuItem>
            <MenuItem
              onClick={() => {
                history.push("/");
                window.localStorage.clear();
              }}
            >
              Logout
            </MenuItem>
          </span>
        )}
        {location.pathname.match(adopterHeader) && (
          <span>
            <MenuItem onClick={() => history.push("/adopter")}>Perfil</MenuItem>
            <MenuItem onClick={() => history.push("/animals")}>
              Animais
            </MenuItem>
            <MenuItem onClick={() => history.push("/adopter/favorites")}>
              Quero adotar
            </MenuItem>
            <MenuItem
              onClick={() => {
                history.push("/");
                window.localStorage.clear();
              }}
            >
              Logout
            </MenuItem>
          </span>
        )}
      </Menu>
    </div>
  );
};

export default MenuMobile;
