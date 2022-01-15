import React from 'react';

import { Wrapper, Content, InfoLine, InfoText, Title, Detail } from './JobInfo.style';

const JobInfo = ({ job }) => {

    return (
        <Wrapper>
            <Content
                contentContainerStyle={{ paddingTop: 20, paddingBottom: 0 }}
            >
                <InfoLine>
                    <InfoText>
                        <Title>Job title</Title>
                        <Detail>{job.title}</Detail>
                    </InfoText>
                </InfoLine>
                <InfoLine>
                    <InfoText>
                        <Title>City</Title>
                        <Detail>{job.city}</Detail>
                    </InfoText>
                </InfoLine>
                <InfoLine>
                    <InfoText>
                        <Title>Address</Title>
                        <Detail>{job.address}</Detail>
                    </InfoText>
                </InfoLine>
                <InfoLine>
                    <InfoText>
                        <Title>Desciption</Title>
                        <Detail>{job.description}</Detail>
                    </InfoText>
                </InfoLine>
                <InfoLine>
                    <InfoText>
                        <Title>Min salary</Title>
                        <Detail>${job.minSalary}</Detail>
                    </InfoText>
                </InfoLine>
                <InfoLine>
                    <InfoText>
                        <Title>Max salary</Title>
                        <Detail>${job.maxSalary}</Detail>
                    </InfoText>
                </InfoLine>
            </Content>
        </Wrapper>
    );
}

export default JobInfo;