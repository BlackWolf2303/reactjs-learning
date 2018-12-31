import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
  <div className="tagline-upper text-center text-heading text-shadow text-white mt-5 d-none d-lg-block">Business Casual</div>
  <div className="tagline-lower text-center text-expanded text-shadow text-uppercase text-white mb-5 d-none d-lg-block">3481 Melrose Place | Beverly Hills, CA 90210 | 123.456.7890</div>
  {/* Navigation */}
  <nav className="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
    <div className="container">
      <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="index.html">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="about.html">About</a>
          </li>
          <li className="nav-item active px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="blog.html">Blog</a>
          </li>
          <li className="nav-item px-lg-4">
            <a className="nav-link text-uppercase text-expanded" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container">
    <div className="bg-faded p-4 my-4">
      <div className="card card-inverse">
        <img className="card-img img-fluid w-100" src={require("../assets/images/slide-1.jpg")} alt="slide-1" />
        <div className="card-img-overlay bg-overlay">
          <h2 className="card-title text-shadow text-white text-uppercase mb-0">Post Title</h2>
          <h4 className="text-shadow text-white">March 1, 2017</h4>
          <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat provident quo aliquam eius ea, animi porro magnam totam dolor nam error quas labore eveniet dicta nostrum inventore veniam. Ipsam?</p>
          <a href="#" className="btn btn-secondary">Read More</a>
        </div>
      </div>
    </div>
    <div className="bg-faded p-4 my-4">
      <div className="card card-inverse">
        <img className="card-img img-fluid w-100" src={require("../assets/images/slide-2.jpg")} alt="slide-2" />
        <div className="card-img-overlay bg-overlay">
          <h2 className="card-title text-shadow text-white text-uppercase mb-0">Post Title</h2>
          <h4 className="text-shadow text-white">March 1, 2017</h4>
          <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat provident quo aliquam eius ea, animi porro magnam totam dolor nam error quas labore eveniet dicta nostrum inventore veniam. Ipsam?</p>
          <a href="#" className="btn btn-secondary">Read More</a>
        </div>
      </div>
    </div>
    <div className="bg-faded p-4 my-4">
      <div className="card card-inverse">
        <img className="card-img img-fluid w-100" src={require("../assets/images/slide-3.jpg")} alt="slide-3" />
        <div className="card-img-overlay bg-overlay">
          <h2 className="card-title text-shadow text-white text-uppercase mb-0">Post Title</h2>
          <h4 className="text-shadow text-white">March 1, 2017</h4>
          <p className="lead card-text text-shadow text-white w-50 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat provident quo aliquam eius ea, animi porro magnam totam dolor nam error quas labore eveniet dicta nostrum inventore veniam. Ipsam?</p>
          <a href="#" className="btn btn-secondary">Read More</a>
        </div>
      </div>
    </div>
    {/* Pagination */}
    <div className="bg-faded p-4 my-4">
      <ul className="pagination justify-content-center mb-0">
        <li className="page-item">
          <a className="page-link" href="#">← Older</a>
        </li>
        <li className="page-item disabled">
          <a className="page-link" href="#">Newer →</a>
        </li>
      </ul>
    </div>
  </div>
  {/* /.container */}
  <footer className="bg-faded text-center py-5">
    <div className="container">
      <p className="m-0">Copyright © Your Website 2017</p>
    </div>
  </footer>
</div>

      </div>
    );
  }
}

export default App;
