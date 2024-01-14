import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

interface ToggleButtonsProps {
  toggleScreen: () => void;
  showPolicyIllustrator: boolean;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  toggleScreen,
  showPolicyIllustrator,
}) => {
  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      toggleScreen(); // Call toggleScreen when a button is clicked
    }
  };

  const buttonStyle = {
    fontSize: "12px", // Adjust the font size as needed
  };

  return (
    <ToggleButtonGroup
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      size="small"
    >
      <ToggleButton
        value="left"
        aria-label="left aligned"
        disabled={!showPolicyIllustrator}
        size="small"
        style={buttonStyle}
      >
        Policy Illustrator
      </ToggleButton>

      <ToggleButton
        value="justify"
        aria-label="justified"
        disabled={showPolicyIllustrator}
        size="small"
        style={buttonStyle}
      >
        Life Illustrator
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtons;
