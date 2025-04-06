import './Herosection.css'
import Group from '../assets/Group.png';
import { useState } from "react";

const Herosection = () => {
    const [buttonColor, setButtonColor] = useState("white");
    const handleClick = () => {
        setButtonColor(buttonColor === "blue" ? "white" : "blue");
    };
    return ( 
        <section>
            <div className="herosec">
                <div className="groupdiv">
                   <img 
                        src={Group} 
                        className='group' 
                        alt="Group pic"
                    />
                </div>
                <div className="groupseconddiv">
                    <h5 className="welcome">W E L C O M E</h5>
                    <h3 className="herosechthree">Lorem ipsum dolor sit amet consectetur</h3>
                    <p className="herosecpara">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                </div>
                
            </div>
            <button className="herosecbutton"  style={{ backgroundColor: buttonColor, color: "black" }} onClick={handleClick}>Explore</button>
        </section>
     );
}
 
export default Herosection;