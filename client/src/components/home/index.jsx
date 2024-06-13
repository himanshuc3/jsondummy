import React, {useEffect} from 'react'
import {Header,Footer,SchemaValidator} from '../index'
import './index.scss';
import Vivus from 'vivus'
import Logo from '../logo'


function Home() {

  

  return (
    <div id="json-dummy">
        {/* <Logo /> */}
          <Header />
          <SchemaValidator />
          <Footer/>
    </div>
  );
}

export default Home;
