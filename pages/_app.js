import '../styles/globals.scss'
import Layout from "../components/Layout"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {

  

  return (

        <Layout router={router} > <Component {...pageProps} /> </Layout>
        
  )
}

export default MyApp
