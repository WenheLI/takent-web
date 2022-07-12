import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type SideBarProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>,
    currPage: number
};

export default function SideBar({ setPage, currPage } : SideBarProps) {
    const theme: any = useTheme();
    const buttonData = [{
        icon: <HomeIcon />,
        text: 'Home',
    }, {
        icon: <DashboardIcon />,
        text: 'Dashboard',
    }, {
        icon: <HourglassEmptyIcon />,
        text: 'Applied',
    }, {
        icon: <AccountCircleIcon />,
        text: 'Profile',
    }];

    const selectedButtonStyle = {
        color: theme.palette.secondary.main,
        marginTop: '24px'
    };

    const buttonStyle = {
        color: '#777777',
        marginTop: '24px'
    };

    return <Box sx={{
        height: 'calc(100vh - 64px)',
        backgroundColor: theme.palette.primary.main,
        marginTop: '6px',
        display: 'flex',
        width: '240px',
        flexDirection: 'column',
        alignItems: 'center',
    }}>
      <Box
          sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
          }}
      >
        {buttonData.map((button, index) => {
            return <Button 
                    key={index} 
                    style={currPage === index ? selectedButtonStyle : buttonStyle}
                    startIcon={button.icon}
                    onClick={() => setPage(index)} 
                > {button.text} </Button>
        })}
      </Box>

      <Box
        sx={{
            flexGrow: 0,
            display: 'flex',
            flexDirection: 'column',
        }}
      >
          <Button style={{
              color: '#777777'
          }} variant="text" startIcon={<HomeIcon />}>
              Homepage
          </Button>
          <Button style={{
              color: '#777777'
          }} variant="text" startIcon={<HomeIcon />}>
              Homepage
          </Button>

      </Box>
    </Box>
}