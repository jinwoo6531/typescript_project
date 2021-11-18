import React from "react";
import styled from "styled-components/macro";

import {
  Box,
  Card as MuiCard,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Typography = styled(MuiTypography)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

type StatsPropsType = {
  title: string;
  amount: string;
  chip: string;
  percentageText: string;
  percentagecolor: string;
};

const Stats: React.FC<StatsPropsType> = ({ title }) => {
  return (
    <Card mb={3}>
      <CardContent>
        <Typography variant="h6" mb={4}>
          {title}
        </Typography>
        <Typography variant="h3" mb={3}>
          <Box fontWeight="fontWeightRegular">이미지</Box>
        </Typography>
      </CardContent>

      <CardContent>
        <div style={{ display: "flex" }}>
          <div>
            <span>가입 날짜</span>
            <span>2021년 10월 11일</span>
          </div>
          <div>
            <span>가입 상태</span>
            <span>이용중</span>
          </div>
          <div>
            <span>사용 플랜</span>
            <span>프로 요금제(무제한)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Stats;
