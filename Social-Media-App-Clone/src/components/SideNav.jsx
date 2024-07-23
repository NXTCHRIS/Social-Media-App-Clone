import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MemoryIcon from "@mui/icons-material/Memory";
import MovieIcon from "@mui/icons-material/Movie";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import OutboundIcon from "@mui/icons-material/Outbound";
import { Toolbar } from "@mui/material";
export default function SideNav() {
  const drawer = (
    <div className="z-20">
      <Toolbar>
        <Button startIcon={<OutboundIcon />} sx={{ p: 0 }}>
          POPULAR
        </Button>
      </Toolbar>
      <Divider />
      <List>
        {[
          { text: "Viral", icon: <EmojiEmotionsIcon /> },
          { text: "Games", icon: <SportsEsportsIcon /> },
          { text: "Movies & TV", icon: <MovieIcon /> },
          { text: "Tech", icon: <MemoryIcon /> },
          { text: "Sport", icon: <SportsBaseballIcon /> },
        ].map((listItem) => (
          <ListItem key={listItem} disablePadding>
            <ListItemButton>
              <ListItemIcon>{listItem.icon}</ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About", "Advertise", "Careers", "Help"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      //   onTransitionEnd={handleDrawerTransitionEnd}
      //   onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { display: "block" },
        position: "absolute",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "300px",
          mt: "4.3rem",
          position: "fixed",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
}
