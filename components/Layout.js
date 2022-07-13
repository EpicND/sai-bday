import Header from "./Header";
import Dropdown from "./Dropdown";
import { isValidElement, cloneElement } from "react";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import useLocalStorage from 'use-local-storage';
  

export default function Layout({ children, router }) {

        const inputRef = useRef()

        function recursiveMap(children, fn) {
            return React.Children.map(children, child => {
              if (!React.isValidElement(child) || typeof child.type == 'string') {
                return child;
              }
          
              if (child.props.children) {
                child = React.cloneElement(child, {
                  children: recursiveMap(child.props.children, fn)
                });
              }
          
              return fn(child);
            });
          }
        
          // Add props to all child elements.
          const childrenWithProps = recursiveMap(children, child => {
            // Checking isValidElement is the safe way and avoids a TS error too.
            if (isValidElement(child)) {
              // Pass additional props here
              return cloneElement(child, { ref: inputRef })
            }
        
            return child;
          });

        return (
            <div > 
                
                <div className="page-container" >
                    <Header route={router.route}> </Header>
                    <Dropdown route={router.route}> </Dropdown> 
                    <AnimatePresence exitBeforeEnter >
                        <motion.div  onScroll={() => {
                                    console.log(inputRef.current);
                                }}
              className="content-container" key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} }>
                            {childrenWithProps}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        )
  }