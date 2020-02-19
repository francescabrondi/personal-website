import React from "react";

export default () => (
  <div className="About">
    <h1 className="title-page">About me</h1>

    <div className="Presentation">
      <img
        src="https://scontent.fmxp6-1.fna.fbcdn.net/v/t1.0-9/72414762_2736260529757899_2412866447404433408_n.jpg?_nc_cat=105&_nc_ohc=bFekWYWXmdUAX_UcgKH&_nc_ht=scontent.fmxp6-1.fna&oh=9f8b97439f98a87399ead96fc499fd2c&oe=5F035D1B"
        alt=""
      />
      <div className="text">
        <h4>Francesca Brondi</h4>
        <i class="fas fa-map-marked-alt">
          {" "}
          <span> Milan, Italy </span>
        </i>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          molestias necessitatibus aliquid quidem, neque modi? Qui deleniti fuga
          odio quae. Enim id praesentium nemo consequuntur non provident esse
          accusantium officia, nulla quo dolore dolorem fugiat sit eum dolorum,
          rem exercitationem architecto corrupti sunt similique iusto vero
          expedita aliquid. Ex, illum.
        </p>
      </div>
    </div>
    <h3>My interests</h3>
    <div className="Interests">
      <div className="container">
        <div className="row">
          <div className="col">
            <i class="fas fa-code">
              <span>Coding</span>{" "}
            </i>
          </div>
          <div className="col">
            <i class="fas fa-globe-americas ">
              <span>Travelling</span>{" "}
            </i>
          </div>
          <div class="col">
            <i class="fas fa-book">
              <span>Books</span>{" "}
            </i>
          </div>
        </div>
        <div className="row">
          <div class="col">
            <i class="fas fa-music">
              <span>Music</span>{" "}
            </i>
          </div>
          <div class="col">
            <i class="fas fa-edit">
              <span>Design</span>{" "}
            </i>
          </div>
          <div class="col">
            <i class="fas fa-language">
              <span>Languages</span>{" "}
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
);
