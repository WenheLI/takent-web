import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

type JobItemProps = {
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function JobItem({handleClose} : JobItemProps) {
    return (
        <Box sx={{
            width: '100%',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                }}>
                    <Image src="https://source.unsplash.com/random/800x600" 
                        fit="cover"
                        style={{
                            borderRadius: '24px',
                            height: '88px',
                            width: '88px',
                        }}
                    />
                </Box>
                <Box sx={{
                    marginLeft: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <AccountBoxIcon />
                        <Typography> Product Manager </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <BusinessIcon />
                            <Typography >Coinbase</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                            <LocationOnIcon />
                            <Typography >Beijing</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}>
                        <PeopleIcon />
                        <Typography> 1001-5000 EMPLOYEES </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    flexGrow: 1,
                    alignItems: 'flex-end',
                    marginRight: '12px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}>
                        <MonetizationOnIcon />
                        <Typography> $100k - $200k </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Typography>2 hours ago</Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{
                                marginLeft: '12px',
                                width: '110px',
                                height: '36px',
                                borderRadius: '8px',
                            }}
                            onClick={() => handleClose(true)}
                        >Apply</Button>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{
                marginTop: '12px',
            }} variant="middle" />
        </Box>
    )
}
