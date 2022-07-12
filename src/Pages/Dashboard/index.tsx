import { useTheme } from "@emotion/react";
import { Box, Button, Card, Container, Stack, Tabs, Typography } from "@mui/material";
import { display, height, width } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import Appbar from "../../Components/Appbar";
import SideBar from "../../Components/Sidebar";
import Banner from "../../Components/Banner";
import JobItem from "../../Components/JobItem";
import BoltIcon from '@mui/icons-material/Bolt';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Uploader from "../../Components/UploadCV";

export default function Dashboard() {
  const [page, setPage] = React.useState(0);
  const buttonStyle = {
    color: '#11111',
    width: '142px',
    height: '40px',
    borderRadius: '8px',
    marginLeft: '12px',
  };
  const [close, handleClose] = React.useState(true);
  return <>
      <Appbar />
      <Uploader handleClose={handleClose} open={close}/>
      <Box sx={{
            display: 'flex',
            flexDirection: 'row',
      }}>
        <SideBar setPage={setPage} currPage={page} />
        <Box style={{
            width: '80%',
            margin: '24px',
        }}>
            <Banner></Banner>
            <Card
              style={{
                marginTop: '12px',
                width: '100%',
                height: "400px",
                paddingTop: '12px',
              }}
            >
              <Box sx={{
                display: 'flex',
                marginLeft: '12px',
                flexDirection: 'column',
              }}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Typography variant="h6">
                  Recommended Jobs
                </Typography>
                <Box sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                  <Button variant="contained" sx={buttonStyle}> <ArrowBackIosIcon sx={{
                    fontSize: '12px',
                  }}/> Salary </Button>
                  <Button variant="contained" sx={buttonStyle}> <ArrowBackIosIcon sx={{
                    fontSize: '12px',
                  }}/> Team Size </Button>
                  <Button variant="contained" sx={buttonStyle}> <ArrowBackIosIcon sx={{
                    fontSize: '12px',
                  }}/> Categories </Button>
                  <Button variant="contained" sx={buttonStyle}> <ArrowBackIosIcon sx={{
                    fontSize: '12px',
                  }}/> Release Time </Button>
                  <Button variant="contained" sx={buttonStyle}> <ArrowBackIosIcon sx={{
                    fontSize: '12px',
                  }}/> Location </Button>
                  <Button variant="contained" 
                          color="secondary"
                          sx={{
                            width: '171px',
                            height: '40px',
                            marginLeft: '12px',
                            borderRadius: '12px',
                            marginRight: '12px',
                          }}> <BoltIcon />  Quick Search </Button>
                </Box>
              </Box>

              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                marginTop: '24px',
              }}>
                <JobItem handleClose={handleClose}></JobItem>
              </Box>
              </Box>
            </Card>
        </Box>
      </Box>
  </>
}