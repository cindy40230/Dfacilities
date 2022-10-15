import React, { Component } from 'react';
import ModalOffre from './ModalOffre';
export default class Bouton extends Component {

  state={
    visible:false
  }
  afficherModal=()=>{
    this.setState({
      visible:true
    })
  }
  cacherModal=()=>{
    this.setState({
      visible:false
    })

  }
  render() {
    return (
      <div className="modalOffre">
      <button onClick={this.afficherModal} className="btn ">POSTULER</button>
      <ModalOffre
        visible={this.state.visible}
        cache={this.cacherModal}
      />
      </div>
    )
  }
}
