import React from "react";
import { AreaChart, StackedAreaChart, Grid } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { View, ScrollView } from "react-native";
import * as shape from "d3-shape";

class AreaChartExample extends React.PureComponent {
  render() {
    const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];

    const Gradient = ({ index }) => (
      <Defs key={index}>
        <LinearGradient
          id={"gradient"}
          x1={"0%"}
          y1={"0%"}
          x2={"0%"}
          y2={"100%"}
        >
          <Stop offset={"0%"} stopColor={"#929BF3"} stopOpacity={0.8} />
          <Stop offset={"100%"} stopColor={"#82B1ED"} stopOpacity={0.2} />
        </LinearGradient>
      </Defs>
    );

    return (
      <View>
        <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1 }}>
            <AreaChart
              style={{ height: 200 }}
              data={data}
              contentInset={{ top: 20, bottom: 20 }}
              svg={{ fill: "#929BF3" }}
              curve={shape.curveNatural}
            >
              {/*<Grid />*/}
              <Gradient />
            </AreaChart>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AreaChartExample;
