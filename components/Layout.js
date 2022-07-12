import Header from "./Header";
// import Dropdown from "./Dropdown";
// import Coverpage from './Coverpage';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import useLocalStorage from 'use-local-storage';
  

export default function Layout({ children, router }) {
    
       
        return (
            <div>
                
                <div className="page-container">
                    <Header> </Header>
                    <AnimatePresence exitBeforeEnter >
                        <motion.div className="content-container" key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} }>
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        )
  }