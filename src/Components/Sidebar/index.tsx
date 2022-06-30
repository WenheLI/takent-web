import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

type SideBarProps = {
    setPage: React.Dispatch<React.SetStateAction<number>>
};

export default function SideBar({ setPage } : SideBarProps) {
    const theme: any = useTheme();

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
          <Button style={{
              color: '#777777'
          }} 
          onClick={() => setPage(0)}
          variant="text" startIcon={<HomeIcon />}>
              Homepage
          </Button>
          <Button style={{
              color: '#777777'
          }} 
          onClick={() => setPage(1)}
          variant="text" startIcon={<HomeIcon />}>
              Homepage
          </Button>
          <Button style={{
              color: '#777777'
          }} 
          onClick={() => setPage(2)}
          variant="text" startIcon={<HomeIcon />}>
              Homepage
          </Button>
          <Button style={{
              color: '#777777'
          }} 
          onClick={() => setPage(3)}
          variant="text" startIcon={<HomeIcon />}>
              Homepage
          </Button>
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