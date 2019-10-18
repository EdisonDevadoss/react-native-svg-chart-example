import React from "react";
import { ProgressChart } from "react-native-chart-kit";
import { View, Dimensions, Text } from "react-native";
import { Defs, LinearGradient, Stop } from "react-native-svg";

class CircleChart extends React.PureComponent {
  render() {
    const data = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [0.4, 0.6, 0.8]
    };

    return (
      <View>
        <Text>Progress circle</Text>
        <ProgressChart
          data={data}
          width={Dimensions.get("window").width} // from react-native
          height={200}
          chartConfig={{
            strokeWidth: 0,
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            // strokeWidth: 2,
            // barPercentage:0.5,
            style: {
              borderRadius: 10
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    );
  }
}

export default CircleChart;
