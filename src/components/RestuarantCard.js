import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
 };

const RestuarantCard =(props) =>{
    const {resData} = props;
    console.log(resData);
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    
    return(
       <div data-testid = "resCard" className="m-4 p-4 w-[300px] rounded-lg" style={styleCard}>
          <img className = "rounded-lg w-full h-[180px] object-cover" src ={CDN_URL + cloudinaryImageId}/>
          <h3 className="font-bold text-lg truncate">{name}</h3> 
          <h4 className="whitespace-normal overflow-hidden text-ellipsis">{cuisines.join(",")}</h4>
          <h4> {avgRating}</h4>
          <h4> {costForTwo}</h4>
       </div>
    );
 };

 export const withPromotedLabel = (RestuarantCard) => {
   return (props) => {
      return (
         <div>
            <label>Promoted</label>
            <RestuarantCard {...props}/>
         </div>
      )
   }
 }
 export default RestuarantCard;