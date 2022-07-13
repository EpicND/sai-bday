import Header from "./Header";
import Dropdown from "./Dropdown";
import { isValidElement, cloneElement } from "react";
import React, { useState, useRef, useEffect, useCallback, useContext, createContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";


export default function Layout({ children, router }) {


        return (
            <div > 
                <div className="page-container" >
                    <Header route={router.route}> </Header>
                    <Dropdown route={router.route}> </Dropdown> 
                    <AnimatePresence exitBeforeEnter >
                        <motion.div 
              className="content-container" key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} }>
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        )
  }