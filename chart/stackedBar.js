import React from "react";
import {
  BarChart,
  StackedBarChart,
  Grid,
  XAxis
} from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";

import { View, ScrollView } from "react-native";
import * as scale from "d3-scale";

class BarChartExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        "#82B1ED",
        "#82B1ED",
        "#82B1ED",
        "#82B1ED",
        "#82B1ED",
        "#82B1ED",
        "#82B1ED",
        "#82B1ED",
        "#82B1ED",
        "#82B1ED"
      ]
    };
  }

  onChangeValue = val => {
    console.log("val is", val);
  };

  render() {
    const fill = "rgb(134, 65, 244)";
    let data = [
      {
        chart: {
          value: 50,
          svg: {
            onPress: val => {
              this.setState({
                colors: [
                  "red",
                  "#82B1ED",
                  "#82B1ED",
                  "#82B1ED",
                  "#82B1ED",
                  "#82B1ED",
                  "#82B1ED",
                  "#82B1ED",
                  "#82B1ED",
                  "#82B1ED"
                ]
              });
            }
          }
        },
        bar: {
          value: 40,
          svg: {
            onPress: val => {}
          }
        }
      },
      {
        chart: {
          value: 20,
          svg: {
            onPress: val => {
              console.log("val is", val);
            }
          }
        },
        bar: {
          value: 50,
          svg: {
            onPress: val => {}
          }
        }
      },
      {
        chart: {
          value: 30,
          svg: {}
        },
        bar: {
          value: 50,
          svg: {}
        }
      },
      {
        chart: {
          value: 10,
          svg: {}
        },
        bar: {
          value: 50,
          svg: {}
        }
      },
      {
        chart: {
          value: 20,
          svg: {}
        },
        bar: {
          value: 50,
          svg: {}
        }
      },
      {
        chart: {
          value: 30,
          svg: {}
        },
        bar: {
          value: 50,
          svg: {}
        }
      }
    ];
    const keys = ["chart", "bar"];

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
      <View>
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <StackedBarChart
              style={{ height: 200, width: 400 }}
              data={data}
              valueAccessor={({ item, key }) => item[key].value}
              colors={this.state.colors}
              contentInset={{ top: 30, bottom: 10 }}
              spacingInner={0.1}
              keys={keys}
            >
              {/*<Grid />*/}
              <Gradient />
            </StackedBarChart>
            <XAxis
              style={{
                // marginTop: 15,
                borderTopColor: "#9EABBE",
                borderTopWidth: 2,
                paddingTop: 3
              }}
              data={data}
              formatLabel={(value, index) => {
                return index;
              }}
              scale={scale.scaleBand}
              contentInset={{ left: 10, right: 10 }}
              svg={{ fontSize: 14, fill: "black" }}
              spacingInner={0.1}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default BarChartExample;
