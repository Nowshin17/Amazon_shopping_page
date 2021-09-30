import React from "react";
import classes from './productPreview.module.css';
const ProductPreview = (props) => {

    // const currentHour = new Date().getHours() > 9 ? new Date().getHours : '0' + new Date().getHours();
    // const currentMinute = new Date().getMinutes() > 9 ? new Date().getMinutes : '0' + new Date().getMinutes();


    return(

        <div className={classes.productPreview}>
            <img src = {props.currentPreviewImage} alt = "product review" ></img>
            {
                props.currentSelectedFeature === 1 ?

                <div className={classes.HeartBeatSection}>
                <i className ="fas fa-heartbeat"></i>
                    <p>78</p>
                </div>

                :

                <div className={classes.TimeSection}>
                {/* <p>{`${currentHour}:${currentMinute}`}</p> */}
                <p>1.23</p>
                </div>
            

            }

        </div>
    );

}
export default ProductPreview;