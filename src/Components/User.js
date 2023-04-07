import React from 'react';
import Timer from './Timer';


class User extends React.Component {

    constructor() {
      super();
      this.state={
        person: {
          fullName: 'Salem Hammami',
          bio: 'Lorem ipsum dolor sit amet Lorem ipsum dolor', 
          imgSrc:"https://media.licdn.com/dms/image/C4E03AQFxTyLI1flD4g/profile-displayphoto-shrink_800_800/0/1648486826366?e=1686182400&v=beta&t=SMHAoamK-7OgSf0ttssM_TK490pad04SHjsOyuYEOoI",
          profession: 'Graphic Designer'
        },
        show:false,
         
      }
    }
    
  
  
  render() {
    return (<div className="App">
  
  <img src={this.state.person.imgSrc} alt="" />
  <h1>{this.state.person.fullName}</h1>
  <p>{this.state.person.bio}</p>
  <h3>{this.state.person.profession}</h3>
  <Timer />

  
  
    </div>)
  }
  }

  export default User