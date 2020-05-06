import React, { Component } from 'react'
import Cards from './components/Card/Card'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import {fetchData} from './api';
import title from './images/image.png'
import styles from './App.module.css'

 class App extends Component {
     state={
         data:{},
         country:''
     }
   async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({
        data:fetchedData
    })
   }
   handleCountryChange=async(country)=>{
       if(country=="global")country=""
       const Data=await fetchData(country);
       console.log(country,Data)
       this.setState({
        data:Data,
        country:country
    })
   }
    render() {
        
        return (
            <div className={styles.container}>
                <img src={title} className={styles.img} alt="covid-19"></img>
               <Cards data={this.state.data}></Cards>
               <CountryPicker handleCountryChange={this.handleCountryChange}></CountryPicker>
               <Chart data={this.state.data} country={this.state.country}></Chart>
                
            </div>
        )
    }
}
export default App;