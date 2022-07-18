import Header from "./Header";
import Dropdown from "./Dropdown";
import { isValidElement, cloneElement } from "react";
import React, { useState, useRef, useEffect, useCallback, useContext, createContext } from 'react';
import { motion, AnimatePresence } from "framer-motion";


export default function Layout({ children, router }) {

    const [currentPage, modifyCurrentPage] = useState("Home");

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

      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        
        return (
            rect.top <= 100 && rect.top >= 0
        );
    }

    function exitedViewPort(element) {
        const rect = element.getBoundingClientRect();
        
        return (
            rect.bottom - window.innerHeight > 50 && rect.bottom - window.innerHeight < 150        );
    }

    function bobby() {
        checkInView();
    }

    function checkInView () {

      if(router.route != "/") {

      } else {
        if (typeof window !== 'undefined') {
          if (isInViewport(document.querySelector("#Paintings"))) modifyCurrentPage("Paintings");
          if (isInViewport(document.querySelector("#Drawings"))) modifyCurrentPage("Drawings");
          if (isInViewport(document.querySelector("#Miscellaneous"))) modifyCurrentPage("Miscellaneous");

          if (exitedViewPort(document.querySelector("#Drawings"))) modifyCurrentPage("Main");
          if (exitedViewPort(document.querySelector("#Paintings"))) modifyCurrentPage("Drawings");
          if (exitedViewPort(document.querySelector("#Miscellaneous"))) modifyCurrentPage("Paintings");

        if(currentPage == "Drawings") {
            document.getElementById("Draw").style.color = "black";
        } else {
            document.getElementById("Draw").style.color = "gray";
        }

        if(currentPage == "Paintings") {
            document.getElementById("Paint").style.color = "black";
        } else {
            document.getElementById("Paint").style.color = "gray";
        }

        if(currentPage == "Miscellaneous") {
            document.getElementById("Misc").style.color = "black";
        } else {
            document.getElementById("Misc").style.color = "gray";
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
                        <motion.div onScroll={bobby}
              className="content-container" key = {router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: .5 }} }>
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        )
  }