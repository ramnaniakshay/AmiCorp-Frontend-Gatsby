import React from 'react'
import Layout from '../../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import MyImg from '../../Assets/Images/bear.jpg'


function index() {
  return (
    <Layout>
      <p>this is paragrapj</p>
      <StaticImage
      src="D:/Traning/FSD/AmiCorp/Gatsby/hello-world/src/Assets/Images/bear.jpg"
      alt='no none'
      />
      <StaticImage
      src="../../Assets/Images/bear.jpg"
      alt='no none'
      />
      </Layout>
  )
}

export default index