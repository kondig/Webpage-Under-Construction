import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Details extends Component {
  render() {
    const style = {
      color:'#b73450',
      display:'block',
      height:'300px',
      fontSize:'20px',
      padding:'35px',
      // width:'350px',
    }
    return (
      <div className={'container'}>
          <div className={'emptydiv'} >  </div>
          <div className={'details-card'} style={style}>
             <FontAwesome className='address' name='building' size='2x' /> &nbsp;5 Granikou str., 15125, Marousi <br/><br/>
             <FontAwesome className='phone' name='phone' size='2x'/> &nbsp; +30 210 64 71 066 <br/><br/>
             <FontAwesome className='mobile' name='mobile' size='3x' /> &nbsp;&nbsp; +30 694 46 03 863 <br/><br/>
             <FontAwesome className='email' name='envelope-open' size='2x' /> &nbsp; papa_kos@otenet.gr

          </div>
      </div>
    )
  }
}

export { Details }
