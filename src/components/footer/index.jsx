import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import Link from "@mui/material/Link";
// import { palette } from '@mui/system';


export const Footer = () => {
  return (
    <BottomNavigation showLabels>
      <BottomNavigationAction
        label={
          <Link href="https://www.google.com/" color="inherit">
            Google
          </Link>
        }
        icon={<GoogleIcon />}
        // onClick={() => {
        //   document.body.scrollTop = 0;
        //   document.documentElement.scrollTop = 0;
        // }}
      />
      <BottomNavigationAction
        label="Google or Facebook?"
        icon={<ForkRightIcon />}
      />
      <BottomNavigationAction
        label={
          <Link href="https://www.facebook.com/" color="inherit">
            Facebook (Meta)
          </Link>
        }
        icon={<FacebookIcon />}
        // onClick={() => {
        //   window.close();
        // }}
      />
    </BottomNavigation>
  );
};
