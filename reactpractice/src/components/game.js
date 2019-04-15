import React, { Component } from "react";
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import ImageContainer from "./Container/imageContainer";
import images from "./Container/images"
import Footer from "./Footer";


class Game extends Component{

    state = {
       score: 0,
       topScore: 0,
       images: images,
       msgForPlayer: " Click an image to begin!",
       clickCounter:0
    };
    
    handleGuess = (e) => {
        e.preventDefault();
        console.log('The image was clicked.');
 
        var counter = this.state.clickCounter;
        console.log("Click Counter", counter);
        
        //gives the id of the image that is clicked
        const id = Number(e.target.id);
        console.log("id", id)
        const images = this.state.images;
        //find the of specific element in an array
        const index = images.findIndex(elem => elem.id === id);
        console.log("index", index)
        const guessLimit = 10;
           
        console.log("Image guessed", images[index].guessed);
  
        //Case: correct guess
        if(!images[index].guessed){

            if(this.state.topScore === this.state.score){
                this.updateScore(images, index, this.state.topScore+1, "You guessed currectly!");
            }      
            else{
                this.updateScore(images, index, this.state.topScore, "You guessed currectly!");
            }

            if(this.state.score === guessLimit){              
                this.resetGame(images, 'Congratulation!!You Won!Play Again!');
            }
            else if(counter> guessLimit){
                this.resetGame(images, 'Sorry!! Play Again!');
            }
            else{
                console.log("play again");
            }
          
        }
        //Case: incorrect guess
        else{
            this.resetUserScore(images, index, this.state.topScore, "You clicked Twice");
        }
 
    };
    //function to count the clicks
    increamentCounter = () => {
        this.setState({
            clickCounter: this.state.clickCounter + 1
        });
    };

    //function to increase the score and topScore
    updateScore = (images, index, newTopScore, newMessage) => {    
        images[index].guessed = true;
        this.setState({
               images:images,
               score: this.state.score+1,
               topScore: newTopScore,
               msgForPlayer: newMessage
           })   
          this.increamentCounter();
     };
      
    //function to reset the user score to 0
    resetUserScore = (images, index, userScore, newMessage) => {
        images[index].guessed = false;
        this.setState({
               score: 0,
               topScore: userScore,
               msgForPlayer: newMessage
           });
        this.increamentCounter();
     };
      
    //function to reset the game
    resetGame = (images, newMessage) => {
        images.forEach(elem => {
            elem.guessed = false;
         });
        this.setState({
               score: 0,
               topScore: 0,
               msgForPlayer: newMessage,
               clickCounter: 0
        });  
    };  

    render(){
        return(
        <div>
            <Nav
                score= {this.state.score}
                topScore = {this.state.topScore}
                msgForPlayer = {this.state.msgForPlayer}
            />
            <Jumbotron/> 
            <ImageContainer
                images={this.state.images}
                handleGuess={this.handleGuess}      
            />   
           <Footer/>       
                
        </div>   
                    
        )
    }
}

export default Game;