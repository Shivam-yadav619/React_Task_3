import React from 'react'
import './Color.css'
export default function Color() {
    const mystyle = {
        
        height: "500px",
        width: "1000px",
        borderRadius: "30px",
    };
    
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('.innerbox');
    buttons.forEach(function (button) {
            
            button.addEventListener('click', function (e) {
                if (e.target.id === 'grey') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'white') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'blue') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'yellow') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'magenta') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'purple') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'brown') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'green') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'chocolate') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'yellowgreen') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'slateblue') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'blueviolet') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'gold') {
                    body.style.backgroundColor = e.target.id;
                }
                
                if (e.target.id === 'orange') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'fuchsia') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'red') {
                    body.style.backgroundColor = e.target.id;
                }

            });
        });
    
    return (
        <>
        <div className="container my-3 border" style={{ backgroundColor: "#CBC3E3" }}>
            <h1 className='text-dark text-center mt-5'>Color Picker</h1>
            <div className="innerbox container mt-2 mb-5 text-center border shadow-lg d-flex justify-content-center  align-items-center" style={mystyle}>
                <div className="items">
                    <span className="button mx-1" id="grey"></span>
                    <span className="button mx-1" id="white"></span>
                    <span className="button mx-1" id="blue"></span>
                    <span className="button mx-1" id="yellow"></span>
                    <span className="button mx-1" id="magenta"></span>
                    <span className="button mx-1" id="purple"></span>
                    <span className="button mx-1" id="brown"></span>
                    <span className="button mx-1" id="green"></span>
                    <span className="button mx-1" id="chocolate"></span>
                    <span className="button mx-1" id="yellowgreen"></span>
                    <span className="button mx-1" id="slateblue"></span>
                    <span className="button mx-1" id="gold"></span>
                    <span className="button mx-1" id="blueviolet"></span>
                    <span className="button mx-1" id="yellow"></span>
                    <span className="button mx-1" id="fuchsia"></span>
                    <span className="button mx-1" id="red"></span>
                    <div className="break"></div>
                    <div className="innertext mt-2 bg-success text-light border shadow-lg">Pick a Color</div>
                </div>
                
            </div>
            </div>
            
                
    </>
    );
}
