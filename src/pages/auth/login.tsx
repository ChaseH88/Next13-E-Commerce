import { Box, Button, Form, Input, Typography } from "components";
import { useAuthState } from "hooks/redux/useAuthState";
import { AuthLayout } from "modules";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";

export default function Login() {
  const formHook = useForm({});
  const theme = useTheme();
  const { useLoginMutation } = useAuthState();
  const [login, { data: response, isLoading, isSuccess }] = useLoginMutation();
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [response, isSuccess]);

  const handleSubmitLogin = async (data: any) => {
    await login(data);
  };

  return (
    <AuthLayout side="right">
      <Box className="wrapper" width="70%">
        <Box>
          <Typography variant="h4" color={theme.colors.palette.white[100]}>
            Login
          </Typography>
        </Box>
        <Box className="form">
          <Form width={"100%"} isSubmitting={isLoading}>
            <Box padding={theme.spacing[2]}>
              <Input
                type="text"
                formInputName="email"
                label="Email"
                formHook={formHook}
                labelColor={theme.colors.palette.white[100]}
              />
            </Box>
            <Box padding={theme.spacing[2]}>
              <Input
                type="text"
                formInputName="password"
                label="Password"
                formHook={formHook}
                labelColor={theme.colors.palette.white[100]}
              />
            </Box>
            <Box
              padding={theme.spacing[2]}
              display={"flex"}
              justifyContent={"flex-end"}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={formHook.handleSubmit(handleSubmitLogin)}
                disabled={
                  formHook.formState.isSubmitting ||
                  !formHook.formState.isValid ||
                  isLoading
                }
              >
                Login
              </Button>
            </Box>
          </Form>
        </Box>
      </Box>
    </AuthLayout>
  );
}
