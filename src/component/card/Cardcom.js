import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import cardinfo from "../../assets/CardInfo.json";
import { Box } from "@mui/material";

const Cardcom = (props) => {
  const num = props.cardNum;
  const [hover, setHover] = useState(false);

  return (
    // Card Component
    <Card
      data-testid="card"
      variant="outlined"
      sx={{
        // width: "100%",
        maxWidth: "22.66669rem",
        padding: "2rem",
        margin: "auto",
        backgroundColor: hover ? "#F5F5F3" : "#F9F9F8",
        border: hover ? "1px solid #D3D4D4" : "1px solid #E9E8E8",
        borderRadius: 0,
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
          marginTop: "-0.5rem",
          marginBottom: "-0.5rem",
        },
      }}
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Content of Card */}
      <CardContent
        data-testid="cardContent"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "stretch",
          padding: 0,
          gap: hover ? "1.5rem" : "1rem",
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        {/* Image of Card */}
        <Typography
          sx={{
            width: "3rem",
            height: "3rem",
            backgroundColor: hover ? "#dde9f6" : "#E1E8F0",
            borderRadius: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Vector">
              <path
                d="M4.88295 2.15754C4.88295 3.34864 3.91737 4.31423 2.72627 4.31423C1.53516 4.31423 0.56958 3.34864 0.56958 2.15754C0.56958 0.966435 1.53516 0.000854492 2.72627 0.000854492C3.91737 0.000854492 4.88295 0.966435 4.88295 2.15754Z"
                fill={`${hover ? "#2b70d7" : "#94A3B8"}`}
              />
              <path
                d="M24.0971 19.9992H0.56958L6.45145 9.29937L9.57244 12.5823L14.8541 4.31423L24.0971 19.9992Z"
                fill={`${hover ? "#2b70d7" : "#94A3B8"}`}
              />
            </g>
          </svg>
        </Typography>
        {/* Title of Card */}
        <Box
          data-testid="cardTitle"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: hover ? "12px" : "4px",
          }}
        >
          {/* Title's content of Card */}
          <Box
            data-testid="cardTitleContent"
            sx={{
              textAlign: "center",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "1.35rem",
              paddingLeft: hover ? "0.5rem" : "0rem",
              color: hover ? "#2b70d7" : "black",
            }}
          >
            {cardinfo.sections[0].cards[num].title}
          </Box>
          {/* Right arrow of Card */}
          <svg
            data-testid="chevron-right"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Chevron-right">
              <path
                id="Path"
                d="M6.33325 11.998L10.3333 7.99805L6.33325 3.99805"
                stroke={`${hover ? "#2b70d7" : "#6B6B6A"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </Box>
        {/* Main Content of Card */}
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 400,
            fontStyle: "normal",
            fontFamily: "Public Sans",
            lineHeight: "1.18125rem",
            color: "rgba(107, 107, 106, 1)",
            alignSelf: "stretch",
            textAlign: "center",
          }}
        >
          {cardinfo.sections[0].cards[num].body}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default Cardcom;
