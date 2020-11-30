import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button, Dimensions } from 'react-native';
import { VictoryChart, VictoryLine } from 'victory-native';
import { Accelerometer, Gyroscope } from 'expo-sensors';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: [],
      y: [],
      newData:[],
      gx: [],
      gy: [],
      dataA: [],
      dataG: []
    }
 }

 componentDidMount() {
   Accelerometer.setUpdateInterval(1000)
   Gyroscope.setUpdateInterval(100
    )
   Accelerometer.addListener(({x, y}) => {

     let adata = this.state.dataA.slice();
    //  let bdata = [];/
     let xa=x;
     let xb=y;
     adata.push([xa],[xb]);
     this.setState({ dataA: adata })
    //  adata.push({
    //    x:x,
    //    y:y
    //  })
    //  this.setState({data:adata})
    //  this.setState(x, y);
     //this.setState({data})
     //this.setState({ newData: })
     //this.setState({ y});

    console.log(this.state.dataA);
     //this.setState({ dataA: x, y });
     //console.log(this.state.dataA);
     //console.log(`ax: ${this.state.ax}`, `ay: ${this.state.ay}`);
    //  setTimeout(() => {
    //   Accelerometer.removeSubscription(subA);
    //  }, 1000)
   });
   Gyroscope.addListener(({x, y}) => {
     let bdata = this.state.dataG.slice();
     let xg=x;
     let yg=y;
     bdata.push([xg], [yg]);
     this.setState({ dataG: bdata })
    // this.setState({ gx: x });
    // this.setState({ gy: y });
    // this.setState({ dataG: x, y });
   //console.log(`gx: ${this.state.gx}`, `gy: ${this.state.gy}`);
   
   //  setTimeout(() => {
   //   Gyroscope.removeSubscription(subG);
   //  }, 1000)
  }); 
 };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.textStyle}>12</Text>
            <Text style={styles.textStyle}>Temp</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.textStyle}>12</Text>

            {/* {this.state.data.map((item) => {
            })} */}
            <Text style={styles.textStyle}>Weight</Text>
          </View>
        </View>
        <View style={styles.graphContainer}>
          <VictoryChart
            height={250}
          >
            <VictoryLine 
              style={{
                data: { stroke: "red" },
                parent: { border: "1px solid #ccc"}
              }}
              data={
                this.state.dataA
                // this.state.data
                // this.state.ax, this.state.ay
              }
              
            />
          </VictoryChart>
          <VictoryChart
            height={250}
          >
            <VictoryLine
              style={{
                data: { stroke: "blue" },
                parent: { border: "1px solid #ccc"}
              }}
              data={
                this.state.dataG
              }
            />
          </VictoryChart>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 10,
    width: SCREEN_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  labelContainer: {
    borderWidth: 1,
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  textStyle: {
    fontSize: 30
  },
  graphContainer: {
    flex: 10,
    borderWidth: 1,
    borderColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',  
  },   
});
