import React from "react";
import { ScrollView} from "react-native";
import { useLocation, useNavigate } from "react-router-native";

import CandidateHeader from "../components/CandidateHeader";
import CandidateInfo from "../components/CandidateInfo";
import { PrimaryButton, PrimaryTextButton } from "../GlobalStyle";

const Candidate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ScrollView>
      <CandidateHeader candidate={location.state.candidate} />
      <CandidateInfo candidate={location.state.candidate} />
      <PrimaryButton onPress={() => navigate(-1)}>
        <PrimaryTextButton>Back to job detail</PrimaryTextButton>
      </PrimaryButton>
    </ScrollView>
  );
};

export default Candidate;
