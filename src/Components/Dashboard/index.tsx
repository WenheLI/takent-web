import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import Banner from "../Banner";
import JobItem from "../JobItem";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BoltIcon from '@mui/icons-material/Bolt';

const buttonStyle = {
    color: '#11111',
    width: '142px',
    height: '40px',
    borderRadius: '8px',
    marginLeft: '12px',
};

type DashboardProps = {
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Dashboard({ handleClose }: DashboardProps) {
    return (
        <Box style={{
            width: '80%',
            margin: 'auto',
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
    )
}