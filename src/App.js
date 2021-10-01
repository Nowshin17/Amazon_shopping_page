import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
// importing Componrnts, there are three component
import ProductDetails from './productDetails/productDetails';
import ProductPreview from './productPreview/productPreview';
import Topbar from './topbar/Topbar';




// created a class
class App extends Component {

  // fatching the object from ProductData.js
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) =>{
    let updatedState = false;
    if(pos === 1)
    {
      updatedState = true;
    }
    this.setState({currentSelectedFeature: pos});

  }


  render(){

    return (
      <div className="App">
  
        {/* navebar */}
        <header className="App-header">
          <nav className = {classes.topbar}>
            <Topbar />
          </nav>
        </header>
         
       
      <body>
  
        <div className={classes.mainContainer}>
  
            <div className = {classes.productPreview}>
              <ProductPreview currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
              currentSelectedFeature={this.state.currentSelectedFeature}  />
            </div>
  
            <div className = {classes.ProductData}>
              <ProductDetails data = {this.state.productData} onColorOptionClick ={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick=
              {this.onFeatureItemClick} currentSelectedFeature = {this.state.currentSelectedFeature} />
            </div>
  
        </div>
  
  

      <div className={classes.imgb}>

      <h2 className={classes.imgtext}>WE ARE HERE FOR YOU</h2>
      <img src = "./img/1.jpg" alt = "img" ></img>

      <h2 className={classes.imgtext}>Visit us</h2>
      
      <div className={classes.bottom}>
      <h2 className={classes.imgtext}>WE ARE HERE FOR YOU</h2>
      </div>
        
      </div>
        
        

      </body>
      </div>
    );

  }

}

export default App;
