import { Triangle } from  'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export const Loader =()=>{
 
        return(
            <Triangle
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
          />
        )
    
}