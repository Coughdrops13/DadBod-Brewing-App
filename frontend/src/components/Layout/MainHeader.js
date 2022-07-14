import { NavLink } from 'react-router-dom'

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>Hello Connor</h1>
      {/* <nav>
        <NavLink
      </nav> */}
    </header>
  )
};

export default MainHeader;