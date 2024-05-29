import React from 'react'
import Layout from '../components/Layout'

function about() {
  const myPerson = {
    name: "AKshay",
    age: 20,
    isEmployeed: true,
    address: {
      streetNoOne: "street address 1",
      streetNoTwo: "street addres line 2",
      pincode: 100001
    },
    hobbies: ["reading", "listening","writing"]
  }
  return (
    <Layout>
      <table>
        
      </table>
      <h1 style={{backgroundColor:'green', color:'white', textAlign:'center'}}>this is about page</h1>
    </Layout>
  )
}

export default about