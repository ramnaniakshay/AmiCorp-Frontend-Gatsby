import * as React from "react";
import Layout from "../components/Layout";
import {Link} from 'gatsby'
import "../Assets/CSS/Home.css"; // Make sure to create and import your CSS file

const Home = () => {
  return (
    <Layout>
      <h1>here we will perform crud operations</h1>
      <div className="card-container">
        <Link to="/product/createP" className="card">
          <h2>Create</h2>
          <p>Perform create operations.</p>
        </Link>
        <Link to="/product/readP" className="card">
          <h2>Read</h2>
          <p>Perform view operations.</p>
        </Link>
        <div className="card">
          <h2>Update</h2>
          <p>Perform update operations.</p>
        </div>
        <div className="card">
          <h2>Delete</h2>
          <p>Perform delete operations.</p>
        </div>
        
      </div>
    </Layout>
  );
};

export default Home;
