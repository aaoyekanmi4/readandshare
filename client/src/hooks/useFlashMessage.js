import {useState, useEffect, useRef} from 'react';


const useFlashMessage = (message) => {
    
    const [showFlash, setShowFlash] = useState(false);
     
    const isInitialMount = useRef(true);

    useEffect(() => {
      if (isInitialMount.current) {
         isInitialMount.current = false;
      } else {
          // Your useEffect code here to be run on update
          setShowFlash(true);
          setTimeout(() => {
              setShowFlash(false);    
          }, 3000)
          console.log('useEffect ran')
      }
    }, [message]);
 
     
   return {showFlash}
    


}
export default useFlashMessage;

