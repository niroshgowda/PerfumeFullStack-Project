import React from 'react'
import Rating from './Rating'
import Rating4 from './Rating4'
import Rating5 from './Rating5'
import { Link} from 'react-router-dom';
import './Home.css'

export default function Home() {
  return (
    <>
  <section className=" top-txt ">
    <div className="head container ">
      <div className="head-txt ">
        <p>Flat 25% discount applied, cod available.</p>
      </div>
      <div className="sing_in_up ">
         <Link to="/login">Login</Link>
         <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  </section>
  <nav className="navbar">
    <div className="navbar-container">
      <input type="checkbox" name="" id="checkbox" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#sellers">Shop</a>
        </li>
        <li>
          <Link to="details"><a href="details">Details</a></Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
        <Link to="cart">< a href="cart">Cart</a></Link>
        </li>
      </ul>
      <div className="logo">
        <img src="https://i.postimg.cc/MGH39Y6S/Screenshot-122.png" alt="" />
      </div>
    </div>
  </nav>
  
  <section id="home">
    <div className="home_page ">
      <div className="home_img ">
        <img src="https://hips.hearstapps.com/hmg-prod/images/jenna-ortega-dare-in-gris-dior-lead-643d9d50edaad.png?crop=1xw:0.41846361185983827xh;center,top&resize=1200:*" alt="img " />
      </div>
      <div className="home_txt ">
        <p className="collectio ">WINTER COLLECTION</p>
        <h2>
          A Collection 
          <br />
          of heavenly Frangrances
        </h2>
        <div className="home_label ">
          <p>
            Explore New Refreshing & Long Lasting Summer Scents
            <br />
            for Him & Her
          </p>
        </div>
        <button>
          <a href="#sellers">SHOP NOW</a>
          <i className="bx bx-right-arrow-alt" />
        </button>
        <div className="home_social_icons">
          <a href="#">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#">
            <i className="bx bxl-pinterest" />
          </a>
          <a href="#">
            <i className="bx bxl-instagram" />
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="collection">
    <div className="collections container">
      <div className="content">
        <img src="https://i.pinimg.com/564x/3f/4f/84/3f4f84c8b2aacdcd477c1a1debd9d19a.jpg" alt="img" />
        <div className="img-content">
          <p>Unisex Perfumes</p>
          <button>
            <a href="#sellers">SHOP NOW</a>
          </button>
        </div>
      </div>
      <div className="content2">
        <img src="https://i.pinimg.com/564x/01/ae/8e/01ae8e2b648a2be6ac6b3c5e59c172a9.jpg" alt="img" />
        <div className="img-content2">
          <p>Men Perfumes</p>
          <button>
            <a href="#sellers">SHOP NOW</a>
          </button>
        </div>
      </div>
      <div className="content3">
        <img src="https://i.pinimg.com/564x/ed/f0/f3/edf0f344d7c66252f7d9bf64abb3eaf5.jpg" alt="img" />
        <div className="img-content3">
          <p>Female Perfumes</p>
          <button>
            <a href="#sellers">SHOP NOW</a>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section id="sellers">
    <div className="seller container">
      <h2>Unisex Perfumes</h2>
      <div className="best-seller">
        <div className="best-p1">
          <img src="https://i.pinimg.com/564x/47/46/31/474631951387008b9c18e739f467eba1.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p> Yves Saint Laurent</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
            </div>
            <Rating/>
            <div className="price">
              Rs.14,999
              <div className="colors">
                <i className="bx bxs-circle red" />
                <i className="bx bxs-circle blue" />
                <i className="bx bxs-circle white" />
              </div>
            </div>
            <div className="buy-now">
              <button>
                <Link to="/cart">Add to cart</Link>
              </button>
            </div>
            {/* <div class="add-cart">
                      <button>Add To Cart</button>
                  </div> */}
          </div>
        </div>
        <div className="best-p1">
          <img
            src="https://bboy.imgix.net/wp-content/uploads/2019/07/christian_dior_spice-blend.jpg?auto=format%2Ccompress"
            alt="img"
          />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Christian Dior Spice blend</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
            </div>
            <Rating4/>
            <div className="price">
              Rs.16,500
              <div className="colors">
                <i className="bx bxs-circle green" />
                <i className="bx bxs-circle grey" />
                <i className="bx bxs-circle brown" />
              </div>
            </div>
            <div className="buy-now">
              <button>
                <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://editorialist.com/thumbnails/600/2021/11/017/274/837/17274837~one-color_0.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Jo Malone English Oak</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bx-star" />
            </div>
            <Rating/>
            <div className="price">
              Rs.19,999
              <div className="colors">
                <i className="bx bxs-circle brown" />
                <i className="bx bxs-circle green" />
                <i className="bx bxs-circle blue" />
              </div>
            </div>
            <div className="buy-now">
              <button>
                <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://editorialist.com/wp-content/uploads/2021/06/Best-Unisex-Perfume-_-4.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Calvin Klein</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <Rating5/>
            <div className="price">
              Rs.17,000
              <div className="colors">
                <i className="bx bxs-circle red" />
                <i className="bx bxs-circle grey" />
                <i className="bx bxs-circle blue" />
              </div>
            </div>
            <div className="buy-now">
              <button>
                <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="seller container">
      <h2>Men Perfumes</h2>
      <div className="best-seller">
        <div className="best-p1">
          <img src="https://www.bigbasket.com/media/uploads/p/l/40276095_1-cristiano-ronaldo-cr7-game-on-eau-de-toilette-long-lasting-fragrance.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>CR7 Cristiano Ronaldo</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <Rating4/>
            <div className="price">
              Rs.4,655
              <div className="colors">
                <i className="bx bxs-circle blank" />
                <i className="bx bxs-circle blue" />
                <i className="bx bxs-circle brown" />
              </div>
            </div>
            <div className="buy-now">
              <button>
              <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://cdn.shopify.com/s/files/1/0633/8520/7020/products/Moodboard_1204fd90-85e2-4f5c-963c-90a3bab00f1e_800x.jpg?v=1674552360" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Denver Blackcode</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
            </div>
            <Rating/>
            <div className="price">
              Rs.300
              <div className="colors">
                <i className="bx bxs-circle brown" />
                <i className="bx bxs-circle red" />
                <i className="bx bxs-circle green" />
              </div>
            </div>
            <div className="buy-now">
              <button>
              <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://images-cdn.ubuy.co.in/635e600b26b5d2173a101996-versace-eros-for-men-parfum-6-7-fl-oz.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Versace Eros Eau De Toilette</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <Rating/>
            <div className="price">
              Rs.8,900
              <div className="colors">
                <i className="bx bxs-circle grey" />
                <i className="bx bxs-circle blank" />
                <i className="bx bxs-circle blank" />
              </div>
            </div>
            <div className="buy-now">
              <button>
              <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://m.media-amazon.com/images/I/71LQV+UNBAL._AC_UF1000,1000_QL80_.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Azzaro</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <Rating/>
            <div className="price">
              Rs.3,990
              <div className="colors">
                <i className="bx bxs-circle grey" />
                <i className="bx bxs-circle red" />
                <i className="bx bxs-circle blue" />
              </div>
            </div>
            <div className="buy-now">
              <button>
              <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="seller container">
      <h2>Women Perfumes</h2>
      <div className="best-seller">
        <div className="best-p1">
          <img src="https://makeupandbeauty.com/wp-content/uploads/2013/12/Bath-Body-Works-Forever-M.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>The Midnight Fragrance</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <Rating4/>
            <div className="price">
              Rs.1,500
              <div className="colors">
                <i className="bx bxs-circle grey" />
                <i className="bx bxs-circle black" />
                <i className="bx bxs-circle blue" />
              </div>
            </div>
            <div className="buy-now">
              <button>
              <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://m.media-amazon.com/images/I/418IdkVYROL.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Gucci Guilty EDT </p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <Rating5/>
            <div className="price">
              Rs.14,599
              <div className="colors">
                <i className="bx bxs-circle blank" />
                <i className="bx bxs-circle blue" />
                <i className="bx bxs-circle brown" />
              </div>
            </div>
            <div className="buy-now">
              <button>
              <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://img.perfume.com/images/products/parent/medium/67930w.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Jimmy Choo</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
              <i className="bx bxs-star" />
            </div>
            <Rating/>
            <div className="price">
              Rs.5,599
              <div className="colors">
                <i className="bx bxs-circle blank" />
                <i className="bx bxs-circle red" />
                <i className="bx bxs-circle blue" />
              </div>
            </div>
            <div className="buy-now">
              <button>
              <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://cdn.awsli.com.br/2418/2418635/produto/197235194/m020604097_angeledt-4-(1)-f1c2db531f.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Angel Mugler</p>
            </div>
            <div className="rating">
              <i className="bx bxs-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
              <i className="bx bx-star" />
            </div>
            <Rating4/>
            <div className="price">
              Rs.11,999
              <div className="colors">
                <i className="bx bxs-circle blank" />
                <i className="bx bxs-circle grey" />
                <i className="bx bxs-circle brown" />
              </div>
            </div>
            <div className="buy-now">
              <button>
                <a href="#buynow">Add to cart</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="contact">
    <div className="contact container">

        <div className="form">
          <div className="form-txt">
            <h4>INFORMATION</h4>
            <h1>Contact Us</h1>
            <span>
            Get the best deals and discounts on name brand fragrances 
            and more
            </span>
            <h3>E-mail</h3>
            <p>
              ~vintageperfume23@gmail.com
              <br />
              ~vinperfumes@gmail.com
            </p>
            <h3>Call us</h3>
            <p>
              +440 203 116 7711
            </p>
          </div>
          <div className="form-details">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required=""
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required=""
            />
            <textarea
              name="message"
              id="message"
              cols={52}
              rows={7}
              placeholder="Message"
              required=""
              defaultValue={""}
            />
            <button>SEND MESSAGE</button>
          </div>
        </div>
      
    </div>
  </section>
  <footer>
    <div className="footer-container container">
      <div className="content_1">
        <img src="https://i.postimg.cc/MGH39Y6S/Screenshot-122.png" alt="logo" />
        <p>
          The customer is at the heart of our
          <br />
          unique business model, which includes
          <br />
          design.
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div className="content_2">
        <h4>SHOPPING</h4>
        <a href="#sellers">Unisex Perfumes</a>
        <a href="#sellers">Men Perfumes</a>
        <a href="#sellers">Female Perfumes</a>
      </div>
      <div className="content_3">
        <h4>SHOPPING</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="#shopping">Payment Method</a>
        <a href="#shopping">Delivery</a>
        <a href="#shopping">Return and Exchange</a>
      </div>
      
    </div>
    
  </footer>
</>

  )
}
