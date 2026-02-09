import Footer from '@widgets/Footer'
import Header from '@widgets/Header'
import React from 'react'
import CallForPapersContent from './components/CallForPapersContent'

export default function CallForPapers() {
  return (
    <main>
        <Header/>
        <CallForPapersContent/>
        <Footer/>
    </main>
  )
}
