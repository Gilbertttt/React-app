import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
super();

this.state = { 
  items: [],
  searchField: ''
};
}

componentDidMount(){
fetch('https://fakestoreapi.com/products')
   .then((response) => response.json())
   .then((products) => 

   this.setState(
  () =>{
    return {items: products};
   },
  () => {
    console.log(this.state);
   }
   ));

}
// Optimization
   onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(
      () => {
      return { searchField };
    })
  }



  render() {
    // Optimization
    const {items, searchField} = this.state;
    const {onSearchChange} = this;



    const filteredItems = items.filter((items) => {
      return items.title.toLocaleLowerCase().includes(searchField);
    })

return (
    <div className="App">

    <input 
    className  = 'search-box' 
    type = 'search' 
    placeholder = 'Search Item' 
    onChange = {onSearchChange}>
    </input>
     {
      filteredItems.map((items) => {
        return (
          <div key ={items.id}>
          <h1>{items.title}</h1>
          </div>
        );
      })
    }
  
    </div>
  );
  } 
}

export default App;
