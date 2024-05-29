import React from 'react'
import { epic} from './Hero.module.css'
import * as MyHeroModuleCSS from "./Hero.module.css"

function Hero() {
  return (
    <div>
        <h2 className={epic}>this is my hero module</h2>
        <p className={MyHeroModuleCSS.myCustomCSS}>this is paragraph</p>
    </div>
  )
}

export default Hero