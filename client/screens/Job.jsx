import React, { useState } from "react";
import { useWindowDimensions} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import JobApplyTo from "../components/JobApplyTo";
import JobPosted from "../components/JobPosted";

const renderScene = SceneMap({
  first: JobPosted,
  second: JobApplyTo,
});

const Job = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Posted" },
    { key: "second", title: "Apply to" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default Job;
