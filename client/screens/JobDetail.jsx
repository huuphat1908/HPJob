import React from 'react';
import { useParams } from 'react-router-native';
import { View, Text } from 'react-native';

const JobDetail = () => {
    const { jobId } = useParams();

    return (
        <View>
            <Text>Job Detail {jobId}</Text>
        </View>
    );
};

export default JobDetail;