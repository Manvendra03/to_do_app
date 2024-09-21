import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {
    LineChart ,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
  } from 'react-native-chart-kit';

const CustomLineChart = ({dataa}) => {
  return (
    <LineChart
    data={{
      labels: ['Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: dataa,
        },
      ],
    }}
    width={Dimensions.get('window').width - 60} // from react-native
    height={230}
    yLabelsOffset={15}
    xLabelsOffset={0}
    yAxisSuffix="%"
    yAxisInterval={1}
    withInnerLines= {false}
    withHorizontalLines= {false} // optional, defaults to 1
    chartConfig={{

      backgroundColor: '#ECF4FD',
      backgroundGradientFrom: '#1E368A',

      backgroundGradientTo: '#0455C0',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      
    
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#ECF4FE',
      },
    }}
    bezier
    style={{

      borderRadius: 5,
      alignSelf: 'center',
    }}
    fromZero={true}
    segments={5}
    yMax={100}
    yMin={0}
  />
  )
}

export default CustomLineChart

const styles = StyleSheet.create({})