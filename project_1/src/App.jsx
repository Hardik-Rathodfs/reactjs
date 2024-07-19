import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Components/Data'

function App() {
  const [count, setCount] = useState(10)
  const[data,setData]=useState([])
  const[pos,setPos]=useState(false)

  const handleClick = () =>{
    fetch(`https://mock-server-app-ss14.onrender.com/mendata`)
    .then(res => res.json())
    .then((res)=>{
      setData(res)
    })
    .catch((err)=>{
      console.log(err);
    })

  }


  return (
    <>
  
     <header>
        <div class="logo">
          <img src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="" />
        </div>
        <i class="fa-solid fa-bars"></i>
        <nav>
          <ul>
            <li><a href>Home</a></li>
            <li><a href>About</a></li>
            <li><a href>Service</a></li>
            <li><a href>Page</a></li>
            <li><a href>Team</a></li>
            <li><a href>Contact</a></li>
          </ul>

        </nav>

        <div class="butnQ">
          <button onClick={handleClick}>Fetch Data</button>
        </div>
    
      </header>


      <Data arr={data}/>

    <div className='zz'></div>

    <div class="bottom_icons">
  <div class="exchange_icons">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOSleffsgSsashwROvgH26qoTpSqlQBMe0Shd5emGuHC7qRZTl"
      alt=""
    /><br /><br />
    <div>EASY EXCHANGE</div>
  </div>

  <div class="exchange_icons">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPsdLlQq9T_-o_ndL1lc66uwb0rnsXF7tdft3ExBdkJik6LAa"
      alt=""
    /><br /><br />
    <div>100% HANDPICKED</div>
  </div>

  <div class="exchange_icons">
    <img
      src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScEyVI4gDhOVv62XgCYGYnZImfcezYA1huL35dY6yZARjpV6-2"
      alt=""
    /><br /><br />
    <div>ASSURED QUALITY</div>
  </div>
</div>

        <footer>
      <div class="menu_item">
          <div class="item_list">
              <div class="headline">Ajio</div>
              <div class="ftr_items">
                  <a href="">Who we are</a>
                  <a href="">Join our team</a>
                  <a href="">Terms & conditions</a>
                  <a href="">We respect your privacy</a>
                  <a href="">Fee & Payments</a>
                  <a href="">Return & Refunds policy</a>
                  <a href="">Promotions Terms & Conditions</a>
              </div>
          </div>
          <div class="item_list">
              <div class="headline">Help</div>
              <div class="ftr_items">
                  <a href="">Track your order</a>
                  <a href="">Frequently Asked Questions</a>
                  <a href="">Returns</a>
                  <a href="">Cancellations</a>
                  <a href="">Payments</a>
                  <a href="">Customer Care</a>
                  <a href="">How Do I Redeem My Coupon</a>
              </div>
          </div>
          <div class="item_list">
              <div class="headline">Shop By</div>
              <div class="ftr_items">
                  <a href="">Men</a>
                  <a href="">Women</a>
                  <a href="">Kids</a>
                  <a href="">Indie</a>
                  <a href="">Stores</a>
                  <a href="">New Arrivals</a>
                  <a href="">Bramd Directory</a>
                  <a href="">Home</a>
                  <a href="">Collections</a>
              </div>
          </div>
          <div class="item_list">
              <div class="headline">Follow Us</div>
              <div class="ftr_items">
                  <a href="">Facebook</a>
                  <a href="">Instagram</a>
                  <a href="">Terms & conditions</a>
                  <a href="">Twitter</a>
                  <a href="">Pinterest</a>
              </div>
          </div>
      </div>
    
      <div id="payment">
          <div id="payment_method">
              <div class="pay_title">
                  <p>Payment Methods</p>
              </div>
              <div class="pay_logo">
                  <div class="pay_img">
                      <a href=""><img src="./src/images/net_banking.jpg" alt=""/></a>
                  </div>
                  <div class="pay_img">
                      <a href=""><img src="./src/images/visa.jpg" alt=""/></a>
                  </div>
                  <div class="pay_img">
                      <a href=""><img src="./src/images/master_card.jpg" alt=""/></a>
                  </div>
                  <div class="pay_img">
                      <a href=""><img src="./src/images/cash_on_delivery.jpg" alt=""/></a>
                  </div>
                  <div class="pay_img">
                      <a href=""><img src="./src/images/jio_money.jpg" alt=""/></a>
                  </div>
              </div>
          </div>
          <div id="secure_payment">
              <div class="pay_title">
                  <p>Secure Systems</p>
              </div>
              <div class="pay_img">
                  <a href="">
                      <img class="ssl-img" src="./src/images/ssl.png"alt=""/>
                  </a>
              </div>
          </div>
      </div>
    </footer>
    
    </>
  )
}

export default App
