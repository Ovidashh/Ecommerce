import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from '../../services/firebase';
import './Login.css';

const users = [
    {
        email: "asd@yahoo.com",
        password: "ceva"
    },
    {
        email: "qwe@yahoo.com",
        password: "ceva2"
    },
    {
        email: "zxc@yahoo.com",
        password: "ceva3"
    }
];

const theme = createTheme();

export default function Login() {


    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
      <Container component="main" maxWidth="xs">
         <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                let hasUser = false;
                for (let i = 0; i< users.length; i++){
                    if(email === users[i].email && password === users[i].password) {
                        navigate('/');
                    }
                }
              }}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 14 }}
             onClick={() => signInWithGoogle().then(() => navigate('/'))}
            >
              Login with Google
            </Button>
            </Box>
        </Box>
       
      </Container>
  );
}
