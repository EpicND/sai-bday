import Header from "./Header";
import Dropdown from "./Dropdown";
import { isValidElement, cloneElement } from "react";
import React, { useState, useRef, useEffect, useCallback, useContext, createContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";


export default function Layout({ children, router }) {

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
      }

    async function handExitComplete () {
        await timeout(500);
        if (typeof window !== 'undefined') {
          // Get the hash from the url
          const hashId = window.location.hash;
            console.log("m");
          if (hashId) {
            // Use the hash to find the first element with that id
            const element = document.querySelector(hashId);
      
            if (element) {
              // Smooth scroll to that elment
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }
          }
        }
      };

        return (
            <div > 
                <div className="page-container" >
                    <Header route={router.route}> </Header>
                    <Dropdown route={router.route}> </Dropdown> 
                    <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
                        <motion.div 
              className="content-container" key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} }>
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        )
  }