
import { motion, AnimatePresence } from "framer-motion";

// data-fetching methods
export const getServerSideProps = async (ctx) => {


  


    // you have access to the route param slug in the ctx object
    const slug = ctx.params.image 
 
    // fetch the data required for the page by a database query or from a remote API
 
    // return the fetched data as props

    console.log(slug);

    return {
        props: {
          name: slug
        }
    }
 
 }
 
 // the page component
 const SomeDynamicPage = (props) => {

    const images = ["/paintings/astronomy.jpg", "/paintings/avatar.jpg", "/paintings/birds.jpg", "/paintings/clouds.jpg", "/paintings/desert.jpg", "/paintings/flowers.jpg", "/paintings/mountains.jpg", "/paintings/koi.jpg", "/paintings/lighthouse.jpg", "/paintings/mango.jpg", "/paintings/kiwi.jpg", "/paintings/spongebob.jpg", "/paintings/winter.jpg", "/paintings/moon.jpg", "/chalk/heart.jpg", "/digital/dragon.jpg", "/misc/hands.jpg", "/penned/globe.jpg",  "/misc/tyler.jpg", "/penned/lightbulb.jpg", "/digital/skeleton.jpg", "/penned/ring.jpg" ];
    const imageMap = ["astronomy", "avatar", "birds", "clouds", "desert", "flowers", "mountains", "koi", "lighthouse", "mango", "kiwi", "spongebob", "winter", "moon", "heart", "dragon", "hands", "globe",  "tyler", "lightbulb", "skeleton", "ring" ];

 
  // props will contain the data that was returned from the data-fetching method-
  // getServerSideProps 
  if(imageMap.includes(props.name)) {
    return (
        <div className="image-master">
        <div style={{opacity: "1"}} className="image-page"> 
          <motion.img initial={{ height: "0%" }} animate={{ height: "90%" }} exit={{ height: "0%" }} transition={{ type: "default", opacity: { duration: .5 }} } className="image-page-image" src={images[imageMap.indexOf(props.name)]} />
          
        </div>
        <motion.h1 initial="hidden" animate="visible" exit="hidden" variants={{
                hidden: {
                    translateY: 0,
                    opacity: 0
                },
                visible: {
                    translateY: 0,
                    opacity: 1,
                    transition: {
                        delay: .5,
                        duration: .7
                    }
                }

            }}> *Some information about the painting* </motion.h1> 
        </div>
      )
    } else {
        return (
          <div style={{opacity: "1"}}> 
            <div style={{color: "#000", background: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, &quot;Segoe UI&quot;, &quot;Fira Sans&quot;, Avenir, &quot;Helvetica Neue&quot;, &quot;Lucida Grande&quot;, sans-serif", height: "100vh", textAlign: "center",display: "flex" , flexDirection:"column",alignItems: "center", justifyContent: "center"}}>
              <div>
                <h1 style={{display: "inline-block", borderRight: "1px solid rgba(0, 0, 0,.3)", margin: "0", marginRight: "20px", padding:"10px 23px 10px 0", fontSize: "24px", fontWeight:"500", verticalAlign: "top"}}>
                404
                </h1>
                <div style={{display:"inline-block", textAlign: "left", lineHeight: "49px", height:"49px", verticalAlign: "middle"}}>
                  <h2 style={{fontSize: "14px", fontWeight: "normal", lineHeight: "inherit", margin: "0", padding:"0"}}>This image could not be found</h2>
                </div>
              </div>
            </div>
          </div>
        )
      }
 }
 
 export default SomeDynamicPage;