// import React from "react";
// import './index.css';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type1:[,"Fruits"],
//       veges:["spinach","onion","carrots","kales"],
//       fruits:["banana","mango","apple","berries"],
//       quantity:[30,50,50,80],
//       price:[300,700,600,700],
//       images:["https://i.postimg.cc/YqSVtcQW/apple.jpg","https://i.postimg.cc/fbgF38Zb/carrots.jpg",s,"https://i.postimg.cc/43x3stDX/yellow.jpg","https://i.postimg.cc/dV4dKGW9/mango.jpg"]
//      };
      
//     }
      
//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <h1></h1>
        
//         <div></div>
//         <h1><u>Green Kiosk</u></h1>
//         <div class="topnav">
//   <a class="active" href="#home">Home</a>
//   <a href="#news">Products</a>
//   <a href="#contact">View Cart</a>
//   <a href="#about">Contact us</a>
//  <input type="text" placeholder="Search.."></input>
//   <button type="button" class="cart">
//   <span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
//   </button>
// </div>



// <div class="dropdown">
  
//   <button class="dropbtn">Categories</button>
//   <div class="dropdown-content">
//     <a href="#">Fruits</a>
//     <a href="#">Vegetables</a>
//     <a href="#">Herbs</a>

//   </div>
// </div>
//         <section className="one">
          
           
//             <div className="two">
//            <img src={this.state.images[0]}></img>
//            <h5> {this.state.type1[1]}</h5>
//               <p>{this.state.fruits[2]}</p>
//               <p> Qty {this.state.quantity[0]} </p>
//               <p>Ksh {this.state.price[0]} </p>
//               <button className="add-to-cart-btn" onClick="saveItem()">
//                 Add To Cart
//               </button>
             
      
//             </div>
        

          
//             <div className="two">
//             <img src={this.state.images[1]}></img>
//            <h5> {this.state.type1[0]}</h5>
//               <p>{this.state.veges[2]}</p>
//               <p>Qty {this.state.quantity[1]} </p>
//               <p>Ksh {this.state.price[1]} </p>
//               <button className="add-to-cart-btn" onClick="saveItem()">
//                 Add To Cart
//               </button>
//             </div>
        

//           <div className="three">
            
            
//             <img src={this.state.images[2]}></img>
//            <h5> {this.state.type1[1]}</h5>
//               <p>{this.state.fruits[3]}</p>
//               <p> Qty {this.state.quantity[2]} </p>
//               <p>Ksh {this.state.price[2]} </p>

//               <button className="add-to-cart-btn" onClick="saveItem()">
//                 Add To Cart
//               </button>
//             </div>
          

//           <div className="three">
            
          
//             <img src={this.state.images[3]}></img>
//            <h5> {this.state.type1[0]}</h5>
//               <p>{this.state.veges[3]}</p>
//               <p>Qty {this.state.quantity[1]} </p>
//               <p>Ksh {this.state.price[0]} </p>
//               <button className="add-to-cart-btn" onClick="saveItem()">
//                 Add To Cart
//               </button>
//             </div>

//             <div className="four">
            
          
//             <img src={this.state.images[7]}></img>
//            <h5> {this.state.type1[1]}</h5>
//               <p>{this.state.fruits[0]}</p>
//               <p> Qty {this.state.quantity[1]} </p>
//               <p>Ksh {this.state.price[0]} </p>
//               <button className="add-to-cart-btn" onClick="saveItem()">
//                 Add To Cart
//               </button>
//             </div>

//             <div className="four">
            
          
//             <img src={this.state.images[8]}></img>
//            <h5> {this.state.type1[1]}</h5>
//               <p>{this.state.fruits[1]}</p>
//               <p> Qty {this.state.quantity[1]} </p>
//               <p>Ksh {this.state.price[0]} </p>
//               <button className="add-to-cart-btn" onClick="saveItem()">
//                 Add To Cart
//               </button>
//             </div>
//             <div className="four">
            
            
//             <img src={this.state.images[5]}></img>
//            <h5> {this.state.type1[0]}</h5>
//               <p>{this.state.veges[1]}</p>
//               <p> Qty {this.state.quantity[2]} </p>
//               <p>Ksh {this.state.price[3]} </p>

//               <button className="add-to-cart-btn" onClick="saveItem()">
//                 Add To Cart
//               </button>
//             </div>
//             <div className="four">
            
            
//             <img src={this.state.images[6]}></img>
//            <h5> {this.state.type1[0]}</h5>
//               <p>{this.state.veges[0]}</p>
//               <p> Qty {this.state.quantity[2]} </p>
//               <p>Ksh {this.state.price[4]} </p>


//               <button className="add-to-cart-btn" onClick="saveItem()">
//                 Add To Cart
//               </button>
//             </div>

          
          
          
          
          
//  </section>
//       </div>
//     );
//   }
// }

// export default App;