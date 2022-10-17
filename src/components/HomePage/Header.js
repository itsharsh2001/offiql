import React from 'react'
import classes from './Header.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = () => {
  return (
    <header className={classes.header}>
        <a href="https://github.com/itsharsh2001">
          <GitHubIcon className={classes.icon} />
          Github
        </a>
        <a href="https://github.com/itsharsh2001">
          <TextSnippetIcon className={classes.icon} />
          Docs
        </a>
        <a href="https://github.com/itsharsh2001" className={classes.lastspan}>
          <ExitToAppIcon className={classes.icon} />
          SignIn
        </a>
    </header>
  )
}

export default Header
