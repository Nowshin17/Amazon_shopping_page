// import logo from './logo.svg';
import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData from './Utils/ProductData';
import ProductDetails from './productDetails/productDetails';
import ProductPreview from './productPreview/productPreview';
import Topbar from './topbar/Topbar';




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
         
       
  
  
        <div className={classes.mainContainer}>
  
            <div className = {classes.productPreview}>
              <ProductPreview currentPreviewImage = {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
              currentSelectedFeature={this.state.currentSelectedFeature}  />
            </div>
  
            <div className = {classes.ProductData}>
              <ProductDetails data = {this.state.productData} onColorOptionClick ={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature = {this.state.currentSelectedFeature} />
            </div>
  
        </div>
  
  
  
      </div>
    );

  }

}

export default App;
