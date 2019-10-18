import React from "react";
import { BarChart, Grid, XAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";

import { View, ScrollView } from "react-native";
import * as scale from "d3-scale";

class BarChartExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#82B1ED",
      data: [
        {
          value: 50,
          svg: {
            fill: "#82B1ED",
            onPress: val => {
              this.onChangeValue(val);
            }
          }
        },
        {
          value: 20,
          svg: {
            fill: "#82B1ED",
            onPress: val => {
              console.log("val is", val);
            }
          }
        },
        {
          value: 30,
          svg: {
            fill: "#82B1ED"
          }
        },
        {
          value: 10,
          svg: {
            fill: "#82B1ED"
          }
        },
        {
          value: 20,
          svg: {
            fill: "#82B1ED"
          }
        },
        {
          value: 30,
          svg: {
            fill: "#82B1ED"
          }
        },
        {
          value: 30,
          svg: {
            fill: "#82B1ED"
          }
        },
        {
          value: 10,
          svg: {
            fill: "#82B1ED"
          }
        },
        {
          value: 20,
          svg: {
            fill: "#82B1ED"
          }
        },
        {
          value: 30,
          svg: {
            fill: "#82B1ED"
          }
        }
      ]
    };
  }

  onChangeValue = val => {
    const length = val.currentTarget;
    console.log("length is", length);
    const { data } = this.state;
    let current = data[0];
    current.svg.fill = "red";
    data[0] = current;
    console.log('data is', data[0]);
    this.setState({
      data
    });
  };

  render() {
    const fill = "rgb(134, 65, 244)";
    let { data } = this.state;

    const Gradient = ({ index }) => (
      <Defs key={index}>
        <LinearGradient
          id={"gradient"}
          x1={"0%"}
          y1={"0%"}
          x2={"0%"}
          y2={"100%"}
        >
          <Stop
            offset={"0%"}
            stopColor={"rgb(134, 65, 244)"}
            stopOpacity={0.8}
          />
          <Stop
            offset={"100%"}
            stopColor={"rgb(134, 65, 244)"}
            stopOpacity={0.2}
          />
        </LinearGradient>
      </Defs>
    );

    return (
      <View style={{padding: 10}}>
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <BarChart
              style={{ height: 200, width: 400 }}
              data={data}
              yAccessor={({ item }) => item.value}
              svg={{ fill }}
              contentInset={{ top: 30, bottom: 30 }}
              spacingInner={0.09}
            >
              {/*<Grid />*/}
              <Gradient />
            </BarChart>
            <XAxis
              style={{
                marginTop: 15,
                borderTopColor: "#9EABBE",
                borderTopWidth: 2,
                paddingTop: 3
              }}
              data={data}
              formatLabel={(value, index) => {
                return index;
              }}
              scale={scale.scaleBand}
              contentInset={{ left: 5, right: 5 }}
              svg={{ fontSize: 14, fill: "black" }}
              spacingInner={0.09}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default BarChartExample;
