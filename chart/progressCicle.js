import React from "react";
import * as Progress from "react-native-progress";

class ProgressCircleExample extends React.PureComponent {
  render() {
    return <Progress.Bar progress={0.3} indeterminate width={200} />;
  }
}
export default ProgressCircleExample;
