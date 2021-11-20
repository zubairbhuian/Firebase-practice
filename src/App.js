import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';





export default function App(){
 return (
    <AppBar position="fixed" color="primary">
      <Toolbar  style={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant="h6">
          Xixer
        </Typography>
        <div style={{display:'flex'}}>
        <Avatar style={{marginRight:'20px'}} alt="Remy Sharp" src=".." />
          <Button  variant="contained" color="primary">Sign out</Button>
          <Button  variant="contained" color="primary">Sign in</Button>
        </div>
      </Toolbar>
    </AppBar>

  );
}

