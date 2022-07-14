import * as React from 'react';
import {Typography, InputAdornment, IconButton,  FormControl, RadioGroup} from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { fontSize } from '@mui/system';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';


export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userid: data.get('userid'),
      password: data.get('password'),
    });
  };
  const [role, setRole] = React.useState("applicant");
  const [checked, setChecked] = React.useState(false);

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };
  
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  React.useEffect(() => {
      console.log(role);
  });
  
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
       
      
          <Box mt={5} ml={6}>
          <Button variant="text" onClick={() => {
              window.location.href="#"
            }} startIcon={<ArrowBackIosIcon />} color="inherit" sx = {{fontSize: "medium", alignItems: "center"}}>
            返回
          </Button>
        
          </Box>    
          
          <Box
            sx={{
              my: 8,
              mx: 10,
              ml: 30,
              display: 'flex',
              
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            
            <Typography component="h1" sx={{fontWeight: "2000px", fontStyle: "Semibold", fontSize: "40px", lineHeight: "48px"}} >
              手机号注册
            </Typography>
            <Box mt={10} alignItems={'center'}>
            <FormControl>
            
              <RadioGroup
                row
                aria-labelledby="role-select-group"
                name="role-select"
                value={role}
                onChange={handleRoleChange} 
                
              > 
            
                <FormControlLabel  value="applicant" control={<Radio color="secondary" />} label={<Typography fontSize={17} > 我是求职者 </Typography>} />
                <Box ml={10}>
                    <FormControlLabel value="recruiter" control={<Radio color="secondary" />} label={<Typography fontSize={17}> 我是 HR </Typography>} />
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userid"
                label="手机号"
                name="userid"
                color="secondary" 
                autoFocus
                sx={{my:3}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="验证码"
                color="secondary" 
                type="password"
                id="password"
                sx={{my:2}}
                InputProps={{
                  endAdornment:  <InputAdornment position="end">
                  <Button variant="outlined" color = {'inherit'} sx={{color: "#AAAAAA"}}>获取验证码</Button>
                </InputAdornment>
                }}
            
              />
              
              <Grid sx={{mt:10}}>
               
                <FormControlLabel
                control={<Checkbox value="agree" color="default" />}
                label = {<Typography>注册即同意 <Link href="#" underline="hover" color="secondary">{"《用户协议》"}</Link> 和 <Link href="#" underline="hover" color="secondary">{"《隐私政策》"}</Link></Typography>}/> 
              
              </Grid>
              
              {checked && <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                注册
              </Button>}

              {!checked && <Button
                type="submit"
                fullWidth
                disabled
                
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                注册
              </Button>}
             
            </Box>
          </Box>
        </Grid>


        
        <Grid
          item
          xs={false}
          sm={false}
          md={6}
          sx={{
            backgroundImage: 'url("./moon.png")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white',
            backgroundSize: 'auto',
            backgroundPosition: 'right',
            
          }}/>
            
     
      </Grid>
  );
}
