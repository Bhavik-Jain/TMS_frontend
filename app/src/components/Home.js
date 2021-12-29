import React from "react";
import {img1, img2, img3} from "../"; 
function Home() {
  return (
    <>
			<section class="banner">
		    <h1 class="title"> Where the journey begins!</h1>
	    </section>
	    <section>
        <h2 class="package-heading"> FEATURED PACKAGES </h2>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="package-box">
                <div class="package-img">
                  <img src="img\1.jpg" style="opacity: 0.3;">
                  <p class="place">Rajasthan</p><br>
                  <div class="mt-5 button">
                    <button class="btn btn-md view-pack-btn">View Package</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="package-box">
                <div class="package-img">
                  <img src="img\2.jpg" style="opacity: 0.3;">
                  <p class="place">Goa</p><br>
                  <div class="mt-5 button">
                    <button class="btn btn-md view-pack-btn">View Package</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="package-box">
                <div class="package-img">
                  <img src="img\3.jpg" style="opacity: 0.3;">
                  <p class="place">Shimla</p><br>
                  <div class="mt-5 mb-3 button">
                    <button class="btn btn-md view-pack-btn">View Package</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
	    </section>
      <footer class="footer mt-3">
        <p class="mt-4"> © COPYRIGHT 2021: OFFBEAT TRAVELERS.</p>
      </footer>
    </>
  );
}

export default Home;