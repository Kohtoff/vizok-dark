import React, { PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'


const PageLayout = ({children}: PropsWithChildren) => {
  return (
    <div className='container'>
        <Header />
        <main className='main'>
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default PageLayout
