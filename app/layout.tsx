"use client";
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom'; 



export const metadata = {
  title: 'eLearning',
  description: 'Generated by create next app',
}
 
    
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <body>
          <BrowserRouter>
            <Navbar />
            {children}
            <Footer />
          </BrowserRouter> 
        </body>
      </html>
    
  )
}
