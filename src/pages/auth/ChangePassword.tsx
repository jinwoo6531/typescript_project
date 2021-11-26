import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";
import { Formik } from "formik";
import { changePassword } from "../../redux/actions/authActions";
import { withRouter } from "react-router-dom";
import {
  Button,
  Grid,
  Paper,
  TextField as MuiTextField,
  Typography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function ChangePassword() {
  const dispatch = useDispatch();
  const history = useHistory();
  const goHome = () => {
    history.push("/dashboard/default");
  };

  return (
    <Wrapper>
      <Helmet title="Sign Up" />

      <Typography component="h1" variant="h3" align="start" gutterBottom>
        비밀번호 변경
      </Typography>
      <Typography component="h2" variant="body1" align="start" gutterBottom>
        아래 절차대로 새로운 비밀번호를 입력해 주세요.
      </Typography>

      <Formik
        initialValues={{
          old_password: "",
          new_password: "",
          confirm_password: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          new_password: Yup.string()
            .min(12, "비밀번호를 12자 이상 입력해주세요.")
            .max(255)
            .required("비밀번호 형식이 잘못되었습니다."),
          confirm_password: Yup.string().when("new_password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("new_password")],
              "비밀번호가 일치하지 않습니다."
            ),
          }),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await dispatch(
              changePassword({
                old_password: values.old_password,
                new_password: values.new_password,
              })
            );
            history.push("/auth/sign-in");
          } catch (error) {
            setStatus({ success: false });
            setSubmitting(false);
            if (error.message)
              setErrors({
                submit: "비밀번호를 정확히 입력해주세요.",
              });
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleSubmit,
          handleChange,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {errors.submit && (
              <Alert mt={2} mb={1} severity="warning">
                {errors.submit}
              </Alert>
            )}
            <TextField
              type="password"
              name="old_password"
              label="현재 비밀번호 입력"
              value={values.old_password}
              error={Boolean(touched.old_password && errors.old_password)}
              fullWidth
              helperText={touched.old_password && errors.old_password}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="password"
              name="new_password"
              label="신규 비밀번호 입력"
              value={values.new_password}
              error={Boolean(touched.new_password && errors.new_password)}
              fullWidth
              helperText={touched.new_password && errors.new_password}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="password"
              name="confirm_password"
              label="신규 비밀번호 확인"
              value={values.confirm_password}
              error={Boolean(
                touched.confirm_password && errors.confirm_password
              )}
              fullWidth
              helperText={touched.confirm_password && errors.confirm_password}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <Grid justify="flex-end" spacing={2} container>
              <Grid item>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                >
                  저장
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  color="primary"
                  variant="outlined"
                  onClick={goHome}
                >
                  취소
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default withRouter(ChangePassword);
