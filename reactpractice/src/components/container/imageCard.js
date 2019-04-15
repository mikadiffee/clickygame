import React, { Component } from 'react';

class ImageCard extends Component {

   render() {
      return (
         <div>
            <img          
               src={this.props.src}
               alt=""
               class="image-card"
               id={this.props.id}
               width="220" height="200"
               onClick={this.props.handleGuess}
            />
         </div>
      );
   }
}

export default ImageCard;