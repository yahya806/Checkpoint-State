import React from "react"
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    Person : { fullName:"Yahya Elhammi", bio:"Student in GoMyCode", imgSrc:"me.jpg", profession:"Web Devolopper "},
    show : true,
    count: 0
  };
}
  render(){
    const count = this.state.count
    return (
    <div className="App" style={{backgroundColor:"#00BCD4"}}>
      {
        this.state.show?
      <div style={{backgroundColor:"#005E6A"}}>
        <h1 style={{color:"#00BCD4"}}>{this.state.Person.fullName}</h1>
        <h3>{this.state.Person.bio}</h3>
        <div style={{backgroundColor:"#00BCD4"}}><img src={this.state.Person.imgSrc} alt={"img profile"}style={{width:250,height:436}}></img></div>
        <h2>{this.state.Person.profession}</h2>
        <h3>Current Count : {count}</h3>
      </div>
      :null
      }
     <button style={{backgroundColor:"#005E6A"}} onClick={()=>this.setState({...this.state,show:!this.state.show})}>Hide/Show</button>
    </div>)
  }

  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

}


export default App;