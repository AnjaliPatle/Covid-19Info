import React, { Component } from 'react'
import {fetchDailyData} from '../../api'
import {Line,Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'
export default class Chart extends Component {
    state={
        dailyData:{}
    }
    async componentDidMount(){
        const fetchedDailyData=await fetchDailyData();
        this.setState({
            dailyData:fetchedDailyData
        })
    }
   

    render() {
        const lineChart=(
            this.state.dailyData.length?(
                <Line
                data={{
                    labels:this.state.dailyData.map(({date})=>date),
                    datasets:[{
                        data:this.state.dailyData.map(({confirmed})=>confirmed),
                        label:'Infected',
                        borderColor:'#3333FF',
                        fill:true,
                    },{
                        data:this.state.dailyData.map(({confirmed})=>confirmed),
                        label:'Deaths',
                        borderColor:'red',
                        backgroundColor:'rgba(255,0,0,0.5)',
                        fill:true,
                    }],
                }}
                />
            ):null
        )
        const barChart=(
            this.props.data.confirmed?(
                <Bar
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                       label:'People',
                       backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                       data:[this.props.data.confirmed.value,this.props.data.recovered.value,this.props.data.deaths.value]
                    }],
                    
                }}
                options={{
                    legend:{display:false},
                    title:{display:true,text:`Current State in ${this.props.country}`}
                }}

                />
            ):null
        )
        if(!this.state.dailyData)return<h1>Loading..</h1>
        else
        return (
            <div className={styles.container}>
              {this.props.country? barChart:lineChart}
            </div>
        )
    }
}
