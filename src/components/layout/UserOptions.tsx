import {Fragment} from 'react'
import Menu from "../menu/Menu"

export const UserOptions =  () => {
  return (
    <Fragment>
      <div >
        {/* These will all be dropdown menus */}
        <p>Pick your background</p>
        <Menu options={[]} />
        
        {/* Have a menu component here that takes parameters */}
        <p>Pick your size</p>
        <Menu options={[]} / >
        {/* Have a menu component here that takes parameters */}
        <p>Pick your frame</p>
        <Menu options={[]}/>
        {/* Have a menu component here that takes parameters   */}
      </div>

    </Fragment>
  )
}
