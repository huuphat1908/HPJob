import React from 'react';
import { ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Wrapper } from './JobApplied.style';
import ListJobApplied from '../ListJobApplied';
import jobApi from '../../api/jobApi';
import { getUserInfo } from '../../redux/slices/userSlice';

const JobApplied = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.user.current);

    const handleUnapply = async (jobId) => {
        try {
            const data = await jobApi.unapplyToJob(jobId, currentUser._id);
            dispatch(getUserInfo());
            ToastAndroid.show(data.success, ToastAndroid.BOTTOM);
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    return (
        <Wrapper>
            <ListJobApplied
                data={currentUser.jobApplied}
                unapplyCallback={handleUnapply}
                noItemFoundTitle='No job applied'
            />
        </Wrapper>
    );
};

export default JobApplied;