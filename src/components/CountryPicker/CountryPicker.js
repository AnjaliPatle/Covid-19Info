import React, { Component } from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import {countries} from '../../api/index'
import styles from './CountryPicker.module.css'

export default class CountryPicker extends Component {
    state={
        fetchedCountries:[]
    }
    async componentDidMount(){
        this.setState({
            fetchedCountries:await countries()
        })
    }
    render() {
        return (
           <FormControl className={styles.formControl}>
               <NativeSelect  defaultValue=" " onChange={(e)=>this.props.handleCountryChange(e.target.value)}>
                   <option value="global">Global</option>
                   {this.state.fetchedCountries.map((country,i)=>
                   <option key={i} value={country}>{country}</option>
                   )}
               </NativeSelect>
           </FormControl>
        )
    }
}
