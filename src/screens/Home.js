import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
  const [search, setsearch] = useState([]);
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();

    setfoodItem(response[0]);
    setfoodCat(response[1]);
    //console.log(response[0],response[1]);
  }

  useEffect(() => {
    loadData()
  }, [])



  return (
    <div className="con">
      <div>
        <NavBar />
      </div>
      {/* <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner" id="carousell">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-centre">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}} />
            
              </div>
            </div>
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://source.unsplash.com/random/900×500?Burger" style={{ filter: "brightness(30%)" }} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://source.unsplash.com/random/900×500?Pizza" style={{ filter: "brightness(30%)" }} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://source.unsplash.com/random/900×500?Biryani" style={{ filter: "brightness(30%)" }} alt="Third slide" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bS-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div> */}
      <div className="container" style={{background: "linear-gradient(to right, #ff00cc, #333399)", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)"}}>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className="row md-3 mt-4">
                <div key={data._id} className="fs-3 m-3" >
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ?
                  foodItem.filter((item) => (item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(search.toLocaleString())) ) 
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card foodItem={filterItems}
                            options={filterItems.options[0]}
                            
                          ></Card>

                        </div>
                      )
                    }) : <div>No Such Data Found</div>}
              </div>
              )

            })
            : ""

        }
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
