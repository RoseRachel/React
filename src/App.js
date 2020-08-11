import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1:["Vegetables","Fruits"],
      veges:["spinach","onion","carrots","kales"],
      fruits:["banana","mango","apple","berries"],
      quantity:[30,50,50,80],
      price:[300,700,600,700],
      images:["https://i.postimg.cc/YqSVtcQW/apple.jpg","https://i.postimg.cc/fbgF38Zb/carrots.jpg","https://i.postimg.cc/BbMsVxHP/berries.jpg","https://i.postimg.cc/258dpYsq/kales.jpg","https://cdn.shopify.com/s/files/1/0018/8327/5325/products/red_onions_700x700.jpg?v=1587107244","https://i.postimg.cc/G2vH9rmQ/fresh-yellow-onion.jpg","https://i.postimg.cc/rs0czNjL/spinach.jpg","https://i.postimg.cc/43x3stDX/yellow.jpg","https://i.postimg.cc/dV4dKGW9/mango.jpg"]
     };
      
      
      
      

      
      
        
     
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1></h1>
        
        <div></div>
      
        <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">Products</a>
  <a href="#contact">View Cart</a>
  <a href="#about">Contact us</a>
</div>
<h1><u>Green Kiosk</u></h1>
        <section className="one">
          
           
            <div className="two">
           <img src={this.state.images[0]}></img>
           <h5> {this.state.type1[1]}</h5>
              <p>{this.state.fruits[2]}</p>
              <p> Qty {this.state.quantity[0]} </p>
              <p>Ksh {this.state.price[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                ADD
              </button>
            </div>
        

          
            <div className="two">
            <img src={this.state.images[1]}></img>
           <h5> {this.state.type1[0]}</h5>
              <p>{this.state.veges[2]}</p>
              <p>Qty {this.state.quantity[1]} </p>
              <p>Ksh {this.state.price[1]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                ADD
              </button>
            </div>
        

          <div className="three">
            
            
            <img src={this.state.images[2]}></img>
           <h5> {this.state.type1[1]}</h5>
              <p>{this.state.fruits[3]}</p>
              <p> Qty {this.state.quantity[2]} </p>
              <p>Ksh {this.state.price[2]} </p>

              <button className="add-to-cart-btn" onClick="saveItem()">
                ADD
              </button>
            </div>
          

          <div className="three">
            
          
            <img src={this.state.images[3]}></img>
           <h5> {this.state.type1[0]}</h5>
              <p>{this.state.veges[3]}</p>
              <p>Qty {this.state.quantity[1]} </p>
              <p>Ksh {this.state.price[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                ADD
              </button>
            </div>

            <div className="four">
            
          
            <img src={this.state.images[7]}></img>
           <h5> {this.state.type1[1]}</h5>
              <p>{this.state.fruits[0]}</p>
              <p> Qty {this.state.quantity[1]} </p>
              <p>Ksh {this.state.price[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                ADD
              </button>
            </div>

            <div className="four">
            
          
            <img src={this.state.images[8]}></img>
           <h5> {this.state.type1[1]}</h5>
              <p>{this.state.fruits[1]}</p>
              <p> Qty {this.state.quantity[1]} </p>
              <p>Ksh {this.state.price[0]} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                ADD
              </button>
            </div>
            <div className="four">
            
            
            <img src={this.state.images[5]}></img>
           <h5> {this.state.type1[0]}</h5>
              <p>{this.state.veges[1]}</p>
              <p> Qty {this.state.quantity[2]} </p>
              <p>Ksh {this.state.price[3]} </p>

              <button className="add-to-cart-btn" onClick="saveItem()">
                ADD
              </button>
            </div>
            <div className="four">
            
            
            <img src={this.state.images[6]}></img>
           <h5> {this.state.type1[0]}</h5>
              <p>{this.state.veges[0]}</p>
              <p> Qty {this.state.quantity[2]} </p>
              <p>Ksh {this.state.price[4]} </p>


              <button className="add-to-cart-btn" onClick="saveItem()">
                ADD
              </button>
            </div>
          
          
          
          
          
 </section>
      </div>
    );
  }
}

export default App;