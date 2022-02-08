import Image from './images/liz.jpg';

function Assignment(){
    return(
         <div>
             <img src={Image}/>
            <h2>Lizard</h2>
            <p>Lizards are a widespread group of squamate <br></br>reptiles,with over 6,000 species, ranging across<br></br> all continents except Antartica</p>
            <p className='style'>SHARE &nbsp;&nbsp; LEARNMORE</p>
         </div>    
    );
  }
  export default Assignment;