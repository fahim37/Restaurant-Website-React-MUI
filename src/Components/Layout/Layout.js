import React from 'react'
import Header from './Header'
const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <div>
          <div>{children}</div>
        </div>
    </>
  )
}

export default Layout