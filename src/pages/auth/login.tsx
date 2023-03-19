import { Box, Button, Form, Input, Typography } from "components";
import { AuthLayout } from "modules";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";

export default function Login() {
  const formHook = useForm({});
  const theme = useTheme();
  return (
    <AuthLayout side="right">
      <Box className="wrapper" width="70%">
        <Box>
          <Typography variant="h4" color={theme.colors.palette.white[100]}>
            Login
          </Typography>
        </Box>
        <Box className="form">
          <Form width={"100%"}>
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
                onClick={() => alert(JSON.stringify(formHook.getValues()))}
                disabled={
                  formHook.formState.isSubmitting || !formHook.formState.isValid
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
