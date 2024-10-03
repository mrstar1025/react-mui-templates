import React, { useState } from 'react';
import { Box, Container, TextField, Card, Typography, Link, Checkbox, Divider } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';


const SignIn = () => {
  const [openForgotPassword, setOpenForgotPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOpenForgotPassword = () => {
    setOpenForgotPassword(true);
  };

  const handleCloseForgotPassword = () => {
    setOpenForgotPassword(false);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
  };

  return (
    <Container sx={{ background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <Card sx={{ maxWidth: 450, width: '100%', p: 3, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}>
          <AcUnitIcon />
          <Typography><strong>Sitemark</strong></Typography>
        </Box>
        <Typography variant='h4' pb={2}>Sign in</Typography>
        <Typography sx={{ color: '#888' }}>Email</Typography>
        <TextField
          required
          id="outlined-required"
          placeholder='your@email.com'
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          error={!email}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', pt: 2, justifyContent: 'space-between' }}>
          <Typography sx={{ color: '#888' }}>Password</Typography>
          <Link href="#" underline="always" onClick={handleOpenForgotPassword} >
            Forgot your password?
          </Link>
        </Box>
        <TextField
          required
          id="outlined-required"
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          error={!password}
        />
        <FormControlLabel sx={{ py: 2 }} control={<Checkbox />} label="Remember me" />

        <Button variant='contained' fullWidth onClick={handleSignIn}>Sign in</Button>

        <Box sx={{ display: 'flex', alignItems: 'center', pt: 2, justifyContent: 'center' }}>
          <Typography sx={{ color: '#888', pr: 1 }}>Don't have an account?</Typography>
          <Link underline="always" onClick={() => alert('a')}>
            Sign up
          </Link>
        </Box>
        <Box sx={{ display: 'flex', py: 2, alignItems: 'center' }}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ px: 1 }}>or</Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        <Button
          variant='outlined'
          fullWidth
          startIcon={<GoogleIcon />}
          onClick={() => { alert('Test') }}
        >
          Sign in with google
        </Button>
        <Button
          variant='outlined'
          fullWidth
          startIcon={<FacebookRoundedIcon />}
          onClick={() => { alert('Test1') }}
          sx={{ my: 2 }}
        >
          Sign in with Facebook
        </Button>
      </Card>

      <Dialog
        open={openForgotPassword}
        onClose={handleCloseForgotPassword}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            const email = formJson.email;
            console.log(email);
            handleCloseForgotPassword();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForgotPassword}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default SignIn
