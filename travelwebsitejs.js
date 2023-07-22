const header = document.querySelector('#header');
window.addEventListener('scroll', function(){
  if(this.window.scrollY !== 0){
    header.classList.add('sticky')
  } else{
    header.classList.remove('sticky')
  }
})
const home = document.querySelector('#home');
function renderHome(){
    home.innerHTML = `<div id="hometext">
    <h1 >Travel. Explore. <br>Learn.</h1>
    <p>Find the best destinations with reasonable price to explore the beauty, the culture, the people there. <br>
      Various destinations are waiting in line to be your best choice.</p>
    <a href="#" id="home-btn">Let's travel</a>
  </div>`
}
function renderPackage(){
    home.innerHTML = `
    <div id="servicetext">
          <h1>Choose Your Service</h1>
        </div>
        <div id="servicerows">
          <div id="serviceitems">
            <div id="serviceimg">
              <i class="fa-solid fa-ship"></i>
            </div>
            <h4>Cruise Ships</h4>
          </div>
          <div id="serviceitems">
            <div id="serviceimg">
              <i class="fa-solid fa-drumstick-bite"></i>
            </div>
            <h4>Food Tours</h4>
          </div>
          <div id="serviceitems">
            <div id="serviceimg">
              <i class="fa-sharp fa-solid fa-umbrella-beach"></i>
            </div>
            <h4>Summer Tours</h4>
          </div>
        </div>`
}
function renderDestination(){ 
  home.innerHTML = `<div id="destinationtext">
  <h1>Our most popular <br>
  Destinations</h1>
</div>
<div id="destinations-rows">
  <div id="destinations">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tower_Bridge_from_Shad_Thames.jpg/1200px-Tower_Bridge_from_Shad_Thames.jpg">
    <h4>London</h4>
    <p>England</p>
  </div>
  <div id="destinations">
    <img src="https://lh3.googleusercontent.com/p/AF1QipPj-zBt6ZOfuDfkN5W5VipCUKnP1-Hmtr5AWgKC=s1360-w1360-h1020">
    <h4>Machu Picchu</h4>
    <p>Peru</p>
  </div>
  <div id="destinations">
    <img src="https://statics.vinpearl.com/kinh-nghiem-du-lich-ha-long-1_1674039271.jpg">
    <h4>Hạ Long Bay</h4>
    <p>Việt Nam</p>
  </div><div id="destinations">
    <img src="https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp">
    <h4>Rome</h4>
    <p>Italy</p>
  </div><div id="destinations">
    <img src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/05/akihabara-iStock-484915982-1024x683.jpg">
    <h4>Tokyo</h4>
    <p>Japanm</p>
  </div><div id="destinations">
    <img src="https://i0.wp.com/www.touristisrael.com/wp-content/uploads/2020/01/WOMAllenby_PodRendering-1-1-1-1-1.jpg?fit=1050%2C700&ssl=1">
    <h4>Cairo</h4>
    <p>Egypt</p>
  </div>
</div>`
}
function renderFooter(){
  home.innerHTML = `<section id="contact">
  <div id="footer">
    <div id="maincontact">
      <div id="footerlist">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy & Policy</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Tour</a></li>
        </ul>
      </div>
      <div id="footerlist">
        <h4>Support</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy & Policy</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Tour</a></li>
        </ul>
      </div>
      <div id="footerlist">
        <h4>Contact Info</h4>
        <ul>
          <li><a href="#">Lê Phước Thịnh</a></li>
          <li><a href="#">Vũ Công Nguyên</a></li>
        </ul>
      </div>
      <div id="footerlist">
        <h4>Connect</h4>
        <div id="social">
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div id="end-text">
    This website is a project made by Lê Phước Thịnh and Vũ Công Nguyên and doesn't contain real package tours.
  </div>
</section>`
}