import React from 'react'
import Nav from "../component/layout/Nav"
import "../css/About.css"
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <div>
        <section id>
          <div id="about-section1" className="container" >
            <div className="row"  >
              <div className="col-lg-5 col-sm-10" >
                <img
                  className="img-responsive"
                  src="https://media.istockphoto.com/id/1354891373/photo/a-male-electrician-works-in-a-switchboard-with-an-electrical-connecting-cable.jpg?s=612x612&w=0&k=20&c=Kf3dKdLua7qjo_ekhqGOKeL-f9rxxjNsvAkNgKZJ6BI="
                  style={{
                    width: "-webkit-fill-available",
                    borderRadius: 30,
                    marginTop: "45%",
                  }}
                />
              </div>
              <div className=" about-section col-lg-7 col-sm-12 mt-5" >
                <h1 style={{ textAlign: 'center' }}>About Us</h1>
                <hr />
                <br />
                <p id="fs-3" className="fs-4">
                  A.E.S shines as the beacon of industrial synergy, uniting factories and industrial hubs across the cityscape,
                  seamlessly bridging the gap between electrical manufacturers and eager
                </p>
                <p id="fs-3" className="fs-4">
                industries, while illuminating the path to streamlined access and unmatched services."
                </p>
              </div>
            </div>
          </div>  
        </section>
      </div>
    </>
  )
}
