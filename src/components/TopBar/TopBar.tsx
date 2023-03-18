import { Box, Button, Icon, Typography, Input } from "components";
import { TopBarStyled } from "./styles";
import { useTheme } from "styled-components";

interface TopBarProps {
  style?: React.CSSProperties;
  location: string;
  message: string;
}

const TopBar = ({ style, location, message }: TopBarProps) => {
  const theme = useTheme();
  return (
    <TopBarStyled style={style}>
      <Box className="container" display="flex">
        <Box
          className="location"
          flex="0 0 200px"
          display="flex"
          gap={theme.spacing[2]}
          alignItems="center"
        >
          <Icon
            name="FaGlobeAmericas"
            color={theme.colors.palette.white[100]}
            size={14}
          />
          <Typography
            variant="subtitle1"
            color={theme.colors.palette.white[100]}
            style={{ fontWeight: 600, margin: 0 }}
          >
            {location}
          </Typography>
        </Box>
        <Box
          flex="1 1 auto"
          className="message"
          display="flex"
          justifyContent="center"
        >
          <Typography
            variant="subtitle1"
            color={theme.colors.palette.white[100]}
            style={{ margin: 0 }}
          >
            {message}
          </Typography>
        </Box>
        <Box flex="0 0 200px" className="support">
          <Box display="flex" gap={theme.spacing[2]} alignItems="center">
            <Typography
              variant="subtitle1"
              color={theme.colors.palette.white[100]}
              style={{ fontWeight: 600, margin: 0 }}
            >
              1-800-555-5555
            </Typography>
            <Icon
              name="FaHeadset"
              color={theme.colors.palette.white[100]}
              size={14}
            />
          </Box>
        </Box>
      </Box>
    </TopBarStyled>
  );
};

export { TopBar };
