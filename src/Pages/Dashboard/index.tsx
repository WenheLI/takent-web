import { useTheme } from "@emotion/react";
import { Box, Button, Card, Container, Stack, Tabs, Typography } from "@mui/material";
import { display, height, width } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import Appbar from "../../Components/Appbar";
import SideBar from "../../Components/Sidebar";


export default function Dashboard() {
  const [page, setPage] = React.useState(0);

  return <>
      <Appbar />
      <Box sx={{
            display: 'flex',
            flexDirection: 'row',
      }}>
        <SideBar setPage={setPage} />
        <Card style={{
            width: '80%',
            margin: '24px'
        }}>
            {page}
        </Card>
      </Box>
      
  </>
}