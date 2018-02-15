import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Construction extends Component {
  render () {
    const style = {
      color:'red',
      display:'block'
    }
    return (
      <div className={'construction-container'}>

          <h5 className={''}>
            <FontAwesome className='address' name='bullhorn' size='2x' /> <br/>Full Website Coming Soon
          </h5>
          <div className={'card'} style={style}>

          </div>
      </div>

    )
  }
}

export {Construction}
