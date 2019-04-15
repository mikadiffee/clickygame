import React, { Component } from 'react';
// import components
import ImageCard from './imageCard';
import './style.css'


class ImageContainer extends Component {

   shuffle = array => {
      let counter = array.length;
      // While there are elements in the array
      while (counter > 0) {
         // Pick a random index
         let index = Math.floor(Math.random() * counter);
         // Decrease counter by 1
         counter--;
         // And swap the last element with it
         let temp = array[counter];
         array[counter] = array[index];
         array[index] = temp;
      }
      return array;
   }


   render() {
      return (
         <div class="container image-flexbox d-flex flex-wrap">
            {this.shuffle(this.props.images).map(elem => (
               <ImageCard
                  key={elem.id}
                  id={elem.id}
                  src={elem.src}
                  guessed={elem.guessed}
                  handleGuess={this.props.handleGuess}
               />
            ))}
         </div>
      );
   }
}

export default ImageContainer;