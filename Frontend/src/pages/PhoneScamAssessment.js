import React from 'react';

const PhoneScamAsessment = () => (
    <div style={{marginLeft: 80, marginRight: 80}}>
        <h1 className='text-center'>Phone Scams</h1>
        <br />
        <br />
        <div className='row'>
            <div className='col-sm-8'>
                <div className='container-fluid' style={{border: 'thin solid black', height: 625}}>
                    <p align='center' style={{marginTop: 5}}>Image</p>
                    <div>
                        <img src={require('../assets/examples.PNG')} style={{maxWidth: '100%'}}></img>
                    </div>
                </div>
            </div>

            <div className='col-md-auto'>
                <div className='container-fluid' style={{border: 'thin solid black', width: 560, height: 625}}>
                    <p align='center'>Assessment</p>
                    <div className='container' align='center' style={{display: 'table-cell'}}>
                        <p>
                        How visually pleasing were the contents of the image? Were the contents in the site pleasing to the eye, accessible, and easy to understand?
                        </p>

                        <button>Very Visually Attractive or Appealing</button><br/><br/>
                        <button>Visually Attractive or Appealing</button><br/><br/>
                        <button>Neither Attractive/Appealing NOR Unattractive/Unappealing</button><br/><br/>
                        <button>Visually Unattractive or Unappealing</button><br/><br/>
                        <button>Very Visually Unattractive or Unappealing</button><br/><br/>

                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
    </div>
);

export default PhoneScamAsessment;