import { Typography, Toolbar, AppBar} from '@material-ui/core';
import logo from './covid.png';

 const Header = () => {
    return (
        <AppBar position="static">
        <Toolbar>
          
          

          <div>
              <img src={logo} alt="logo" height="25" width="100" style={{marginRight: '10px'}}/>
          </div>

          <Typography variant="h6">
            Tracker
          </Typography>
        
        </Toolbar>
      </AppBar>
        )
}

export default Header