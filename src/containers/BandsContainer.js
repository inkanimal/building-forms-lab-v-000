import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <h2>Bands</h2>
        <h2>Enter New Band</h2>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
     
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: "ADD_BAND", band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
