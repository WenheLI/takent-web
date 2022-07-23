import * as React from 'react';
import {Typography, InputAdornment, IconButton, FormControl, RadioGroup} from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormControl } from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { fontSize } from '@mui/system';
import { useEffect,  useState } from "react"
import { json } from 'stream/consumers';
import FormHelperText from '@mui/material/FormHelperText';



export default function SignInSide() {

  const [checked, setChecked] = useState(false);
  const [role, setRole] = useState("applicant");
  const [mode, setMode] = useState(true);
  const [helperText, setHelperText] = useState('');
  

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userid = event.currentTarget.userid.value;
    if(data.get('passwd') === ""){
      setHelperText("The password is empty");
      return
    }else if(data.get('userid')===""){
      setHelperText("The user ID is invalid");
      return
    }else{
      setHelperText("");
    }
    var url;
     if(role === "applicant"){
       url = 'http://ec2-52-14-66-91.us-east-2.compute.amazonaws.com:8888/loginApp'
     }else{
       url = 'http://ec2-52-14-66-91.us-east-2.compute.amazonaws.com:8888/loginRec'
     }
  

    try {
      fetch(url, {
        method: "POST",
        body: data
      }).then(res => res.json())
      .then(
        (result) => {
          if(result.res === 0){
            setHelperText("");
            
            sessionStorage.setItem("token", result.token);
            sessionStorage.setItem("userid", userid);
            window.location.href="#"
          }else{
            setHelperText(result.msg)
          }
        }
        
      )
    } catch (error) {
      console.log(error);
    }
    
  }

  

  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  

  

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
              {mode ? "手机号登陆" : "用户名密码登陆"}
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
            
            {mode && <>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 2 }}>
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
                name="passwd"
                label="验证码"
                color="secondary" 
                type="password"
                id="passwd"
                sx={{my:2}}
                InputProps={{
                  endAdornment:  <InputAdornment position="end">
                  <Button variant="outlined"  color = {'inherit'} sx={{color: "#AAAAAA"}}>获取验证码</Button>
                </InputAdornment>
                }}
            
              />
              <FormHelperText>{helperText}</FormHelperText>
              <Grid sx={{mt:10}}>
               
                <FormControlLabel
                control={<Checkbox value="agree" checked={checked} onChange={handleCheckChange} color="default" />}
                label = {<Typography>阅读并接受 <Link href="#" underline="hover" color="secondary">{"《用户协议》"}</Link> 和 <Link href="#" underline="hover" color="secondary">{"《隐私政策》"}</Link></Typography>}/> 
              
              </Grid>
              
              {checked && <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                登陆
              </Button>}

              {!checked && <Button
                type="submit"
                fullWidth
                disabled
                
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                登陆
              </Button>}
              <Grid sx={{ my: 2}}>
                
                  <Link onClick={()=>{setMode(!mode)}} underline="hover" color="secondary" >
                    {"用户名密码登陆"}
                  </Link>
                  <Link href="#/signup" underline="hover" color="secondary" sx={{ mx: 2}}>
                    {"立即注册"}
                  </Link>
                
              </Grid>
            </Box>
            </>}


            {!mode && <>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ my: 2 }} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userid"
                label="用户昵称"
                name="userid"
                color="secondary" 
                autoFocus
                sx={{my:3}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="passwd"
                label="密码"
                name="passwd"
                color="secondary" 
                sx={{my:3}}
              />
              
              
             
              <FormHelperText>{helperText}</FormHelperText>
              <Grid sx={{mt:10}}>
               
                <FormControlLabel
                control={<Checkbox value="agree" checked={checked} onChange={handleCheckChange} color="default" />}
                label = {<Typography>阅读并接受 <Link href="#" underline="hover" color="secondary">{"《用户协议》"}</Link> 和 <Link href="#" underline="hover" color="secondary">{"《隐私政策》"}</Link></Typography>}/> 
              
              </Grid>
              
              {checked && <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                登陆
              </Button>}

              {!checked && <Button
                type="submit"
                fullWidth
                disabled
                
                variant="contained"
                sx={{ mt: 3, mb: 2, fontSize: "medium", fontWeight:"200px"}}
              >
                登陆
              </Button>}
              <Grid sx={{ my: 2}}>
                
                  <Link onClick={()=>{setMode(!mode)}} underline="hover" color="secondary" >
                    {"手机号登陆"}
                  </Link>
                  <Link href="#/signup" underline="hover" color="secondary" sx={{ mx: 2}}>
                    {"立即注册"}
                  </Link>
                
              </Grid>
            </Box>
            </>}
            
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
            backgroundSize: 'fill',
            backgroundPosition: 'right',
            
          }}/>
            
     
      </Grid>
  );
}
