import React from "react";
import styled from "styled-components/macro";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { green, red } from "@material-ui/core/colors";
import Stats from "./Stats";
import Table from "./Table";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../redux/reducers";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Default() {
  const { i18n } = useTranslation();
  const { currentLanguage } = useSelector(
    (state: AppStateType) => state.languageReducer
  );

  return (
    <>
      {currentLanguage === "ko" ? (
        <React.Fragment>
          {/* 상단 탭명 변경 */}
          <Helmet title="Main" />
          <Grid justify="space-between" container spacing={6}>
            <Grid item>
              <Typography variant="h3" gutterBottom>
                플랜 현황
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">
                <Typography>서비스관리</Typography>
                <span role="img" aria-label="Waving Hand Sign">
                  플랜 현황
                </span>
              </Typography>
            </Grid>
          </Grid>

          <Divider my={6} />

          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl>
              <Stats
                title="스프링콩 기본 가입정보"
                amount="2.532"
                chip="Today"
                percentageText="+26%"
                percentagecolor={green[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl>
              <Stats
                title="실시간 잔여량"
                amount="170.212"
                chip="Annual"
                percentageText="-14%"
                percentagecolor={red[500]}
              />
            </Grid>
          </Grid>

          <Grid container spacing={6}>
            <Grid item lg={12}>
              <Table />
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item lg={12}>
              <Table />
            </Grid>
          </Grid>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* 상단 탭명 변경 */}
          <Helmet title="Main" />
          <Grid justify="space-between" container spacing={6}>
            <Grid item>
              <Typography variant="h3" gutterBottom>
                {i18n.t("test")}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1">
                <Typography>서비스관리</Typography>
                <span role="img" aria-label="Waving Hand Sign">
                  플랜 현황
                </span>
              </Typography>
            </Grid>
          </Grid>

          <Divider my={6} />

          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6} lg={3} xl>
              <Stats
                title="스프링콩 기본 가입정보"
                amount="2.532"
                chip="Today"
                percentageText="+26%"
                percentagecolor={green[500]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl>
              <Stats
                title="실시간 잔여량"
                amount="170.212"
                chip="Annual"
                percentageText="-14%"
                percentagecolor={red[500]}
              />
            </Grid>
          </Grid>

          <Grid container spacing={6}>
            <Grid item lg={12}>
              <Table />
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item lg={12}>
              <Table />
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </>
  );
}

export default withRouter(Default);
