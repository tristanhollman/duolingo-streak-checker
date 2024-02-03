import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  AppBar,
  Dialog,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, useCallback, useState } from "react";
import { useConfiguration } from "../../hooks/useConfiguration";
import { ConfigButton } from "./ConfigButton/ConfigButton";
import { ToggleThemeButton } from "./ToggleThemeButton/ToggleThemeButton";

export const ConfigView = () => {
  const [showConfigSection, setShowConfigSection] = useState(false);

  const handleClose = useCallback(() => {
    setShowConfigSection(false);
  }, []);

  return (
    <>
      {<ConfigDialog open={showConfigSection} handleClose={handleClose} />}
      <ConfigButton callback={() => setShowConfigSection(!showConfigSection)} />
    </>
  );
};

type ConfigDialogProps = {
  open: boolean;
  handleClose: () => void;
};
const ConfigDialog = (props: ConfigDialogProps) => {
  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Configure settings
          </Typography>
          <ToggleThemeButton />
        </Toolbar>
      </AppBar>
      <ConfigDialogContent />
    </Dialog>
  );
};

const ConfigDialogContent = () => {
  const { config } = useConfiguration();

  return (
    <List>
      {config.userNames.map((userName) => (
        <UserItem userName={userName} key={userName} />
      ))}
      <NewUserItem />
    </List>
  );
};

const UserItem = (props: { userName: string }) => {
  const { config, persistConfig } = useConfiguration();

  const removeUser = (userName: string) => {
    config.removeUserName(userName) && persistConfig(config);
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => removeUser(props.userName)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText primary={props.userName} />
      </ListItem>
      <Divider />
    </>
  );
};

const NewUserItem = () => {
  const { config, persistConfig } = useConfiguration();
  const [newUserName, setUserName] = useState("");

  const addUser = () => {
    config.addUserName(newUserName) && persistConfig(config);
    setUserName("");
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => addUser()}>
            <AddIcon />
          </IconButton>
        }
      >
        <TextField
          value={newUserName}
          onChange={(e) => setUserName(e.target.value)}
          label="Add new user"
          variant="filled"
          size="small"
          fullWidth
        />
      </ListItem>
    </>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});
