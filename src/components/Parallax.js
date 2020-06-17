import React, { Component } from 'react';



export default class Parallax extends Component {
    render() {
        return (
            <div>
                <div class="section white">
                        <div class="row container ">
                         <h2>Form</h2>
                        <form class="col s12 text-align">
                            <div class ="card-panel">
                        <div class="row">
                            <div class="input-field col s6">
                            <input placeholder="First Name" id="first_name" type="text" class="validate"/>
                            <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                            <input  placeholder="Last Name"id="last_name" type="text" class="validate"/>
                            <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input placeholder="Email" id="email" type="email" class="validate"/>
                            <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input placeholder="Organization" id="organization" type="text" class="validate"/>
                            <label for="organization">Organization</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <input placeholder="Telephone" id="telephone" type="text" class="validate"/>
                            <label for="telephone">Telephone</label>
                            </div>
                        </div>
                        </div>
                        </form>
                        
                    
                    </div>
             </div>
            <div class="parallax-container">
                    <div class="parallax">
                        <img class="responsive-img" 
                        src="https://images.pexels.com/photos/673535/pexels-photo-673535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="parallax_1"/>
                                      </div>
               
            </div>
            <div class="section white">
                    <h2>Feature Section</h2>
                    <div class="row">
                            <div class="col s12 m6 l3">
                            <div class="card">
                                    <div class="card-image">
                                    <a href="#!"><img src="https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                    <span class="card-title pink-text">Card Title</span></a>
                                    </div>
                                    <div class="card-content">
                                        <h5 class="card-title pink-text">Card SubTitle</h5>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                    </div>                               
                                    
                                    </div>

                            </div>
                            <div class="col s12 m6 l3"><div class="card">
                                    <div class="card-image">
                                    <a href="#!"><img src="https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                    <span class="card-title pink-text">Card Title</span></a>
                                    </div>
                                    <div class="card-content">
                                        <h5 class="card-title pink-text">Card SubTitle</h5>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                    </div>                               
                                    
                                    </div></div>
                            <div class="col s12 m6 l3"><div class="card">
                                    <div class="card-image">
                                    <a href="#!"><img src="https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                    <span class="card-title pink-text">Card Title</span></a>
                                    </div>
                                    <div class="card-content">
                                        <h5 class="card-title pink-text">Card SubTitle</h5>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                    </div>                               
                                    
                                    </div></div>
                            <div class="col s12 m6 l3"><div class="card">
                                    <div class="card-image">
                                    <a href="#!"><img src="https://images.pexels.com/photos/1369068/pexels-photo-1369068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                    <span class="card-title pink-text">Card Title</span></a>
                                    </div>
                                    <div class="card-content">
                                        <h5 class="card-title pink-text">Card SubTitle</h5>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                                    </div>                               
                                    
                                    </div></div>
                     </div>
             </div>
             <div class="parallax-container">
                    <div class="parallax">
                        <img class="responsive-img" 
                        src="https://images.pexels.com/photos/1037998/pexels-photo-1037998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </div>
            </div>
            <div class="section white">
                    <h2>Testimonial section</h2>
                    <div class ="row container">
                         <div class="col s4"> <img class="responsive-img circle" src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png" style ={{width: '250px',height:'250px'}} alt=""/></div>
                         <div class="col s8">
                              <h4 class="pink-text" style ={{fontFamily: 'Pacifico, cursive'}}>Gourav, Chairman</h4>
                             <p >"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged.It was popularized in the 1960s with the release of sheets containing Lorem Ipsum passages,
                                and more recently with desktop 
                                publishing software like  PageMaker including versions of Lorem Ipsum."</p>
                        </div>
                 </div>
                 <div class ="row container">
                         <div class="col s4"> <img class="responsive-img circle" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/female-512.png" style ={{width: '250px',height:'250px'}} alt=""/></div>
                         <div class="col s8">
                              <h4 class="pink-text" style ={{fontFamily: 'Pacifico, cursive'}}>Shilpa, VP</h4>
                             <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged.It was popularized in the 1960s with the release of sheets containing Lorem Ipsum passages,
                                and more recently with desktop 
                                publishing software like  PageMaker including versions of Lorem Ipsum."</p>
                        </div>
                 </div>
             </div>
             <div class="parallax-container">
                    <div class="parallax">
                        <img class="responsive-img" 
                        src="https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </div>
            </div>
            
        </div>
        );
    }
}


