import React, { useEffect } from "react";
import Cardcom from "../component/card/Cardcom";
import { Box, Grid, Typography } from "@mui/material";

const Page = () => {
  useEffect(() => {
    // Variable to track if an animation frame is currently scheduled
    let ticking = false;

    // Variable to store the last known scroll position
    let last_known_scroll_position = 0;

    // Variable to indicate if the path should be updated
    let updatePath = false;

    // Select the SVG element and paths
    const element = document.querySelector("svg");
    const path1 = element.querySelector("#path1");
    const path2 = element.querySelector("#path2");

    let totalLength = 0;

    // Initialize the paths
    initPath(path1);
    initPath(path2);

    // Function to initialize a path
    function initPath(path) {
      // Calculate the total length of the path
      totalLength = path.getTotalLength();

      // Set the strokeDasharray property to the total length
      path.style.strokeDasharray = `${totalLength}`;

      // Set the strokeDashoffset property to the total length
      path.style.strokeDashoffset = totalLength;
    }

    // Create an IntersectionObserver
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // The observed element is intersecting with the viewport
            console.log(entry);
            updatePath = true;
          } else {
            // The observed element is not intersecting with the viewport
            updatePath = false;
          }
        });
      },
      { rootMargin: "0px 0px 0px 0px" }
    );

    // Observe the SVG element
    observer.observe(element);

    // Function to update the paths based on scroll position
    function doSomething(scroll_pos) {
      if (!updatePath) {
        return;
      }

      // Update path1
      window.requestAnimationFrame(() => {
        // Calculate the scroll percentage based on the current scroll position
        const percentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

        // Calculate the length of the path to be drawn based on the percentage
        const drawLength = percentage > 0 ? totalLength * percentage : 0;

        // Update the strokeDashoffset property of path1 to animate the drawing
        path1.style.strokeDashoffset =
          drawLength < totalLength ? totalLength - drawLength : 0;
      });

      // Update path2
      window.requestAnimationFrame(() => {
        const percentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);
        const drawLength = percentage > 0 ? totalLength * percentage : 0;
        path2.style.strokeDashoffset =
          drawLength < totalLength ? totalLength - drawLength : 0;
      });
    }

    // Event listener for scroll events
    window.addEventListener("scroll", function (e) {
      // Get the current scroll position
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        // Use requestAnimationFrame to update the animation
        window.requestAnimationFrame(function () {
          // Call the doSomething function to perform the necessary actions
          doSomething(last_known_scroll_position);

          // Reset the ticking variable to allow for the next animation frame
          ticking = false;
        });

        // Set the ticking variable to true to prevent multiple animation frames from being scheduled
        ticking = true;
      }
    });
  }, []);

  return (
    <Box
      padding={{ xs: "1.5rem", md: "7vh 0" }}
      textAlign="center"
      fontFamily={"Public Sans"}
    >
      {/* header part */}
      <Typography
        fontSize="1rem"
        fontWeight={700}
        letterSpacing={"0.0375rem"}
        color={"#6B6B6A"}
      >
        ACTIVE INSURANCE
      </Typography>
      <br />

      {/* title part */}
      <Typography
        margin="0 auto"
        fontSize={{ xs: "2rem", md: "3rem" }}
        fontWeight={700}
        fontStyle="normal"
        textAlign="center"
        width="100%"
        maxWidth="49.1875rem"
        lineHeight="110%"
      >
        Protect your business with broad coverage and proactive security
      </Typography>

      <Box
        position="relative"
        margin={{ xs: "1rem 0 0 0", md: "4rem 0 0 0" }}
        fontSize="2rem"
        fontWeight={700}
        lineHeight="120%"
        color="#2B70D7"
      >
        Insurance
        {/* animation line */}
        <Box margin="1rem 0" display={{ xs: "none", md: "block" }}>
          <svg
            style={{ height: "770px", width: "845px", zIndex: -1 }}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* lightgray line */}
            <path
              stroke="#d3d3d3"
              stroke-width="1px"
              fill="none"
              d="M423.295 2C423.295 12.6667 423.295 23.3333 423.295 34C423.295 34.7879 423.591 36.2816 423.295 37C422.49 38.9567 419.134 37.9131 417.018 37.9444C402.929 38.1532 388.829 38 374.74 38C358.851 38 342.962 38 327.073 38C238.74 38 150.406 38 62.0732 38C42.5546 38 23.0361 38 3.5176 38C1.07274 38 2.32302 40.4151 2.29538 45.6667C2.21955 60.0733 2.29538 74.4819 2.29538 88.8889C2.29538 169.667 2.29538 250.444 2.29538 331.222C2.29538 449.963 2.29538 568.704 2.29538 687.444C2.29538 697.963 2.29538 708.481 2.29538 719C2.29538 725.185 2.29538 731.37 2.29538 737.556C2.29538 737.767 2.47524 737.085 2.68426 737.056C4.45989 736.802 6.4001 737 8.18426 737C62.3324 737 116.481 737 170.629 737C248.184 737 325.74 737 403.295 737C407.555 737 411.814 737 416.073 737C423.093 737 423.295 735.975 423.295 744C423.295 752.333 423.295 760.667 423.295 769 M423.131 2C423.131 12.6667 423.131 23.3333 423.131 34C423.131 34.7879 422.836 36.2816 423.131 37C423.937 38.9567 427.293 37.9131 429.409 37.9444C443.498 38.1532 457.598 38 471.687 38C487.576 38 503.465 38 519.354 38C607.687 38 696.02 38 784.354 38C803.872 38 823.391 38 842.909 38C845.354 38 844.104 40.4151 844.131 45.6667C844.207 60.0733 844.131 74.4819 844.131 88.8889C844.131 169.667 844.131 250.444 844.131 331.222C844.131 449.963 844.131 568.704 844.131 687.444C844.131 697.963 844.131 708.481 844.131 719C844.131 725.185 844.131 731.37 844.131 737.556C844.131 737.767 843.952 737.085 843.743 737.056C841.967 736.802 840.027 737 838.243 737C784.094 737 729.946 737 675.798 737C598.243 737 520.687 737 443.131 737C438.872 737 434.613 737 430.354 737C423.334 737 423.131 735.975 423.131 744C423.131 752.333 423.131 760.667 423.131 769"
            />

            {/* animation line: path1, path2 */}
            <path
              id="path1"
              style={{
                transition: "stroke-dashoffset 3000ms ease",
              }}
              d="M423.295 2C423.295 12.6667 423.295 23.3333 423.295 34C423.295 34.7879 423.591 36.2816 423.295 37C422.49 38.9567 419.134 37.9131 417.018 37.9444C402.929 38.1532 388.829 38 374.74 38C358.851 38 342.962 38 327.073 38C238.74 38 150.406 38 62.0732 38C42.5546 38 23.0361 38 3.5176 38C1.07274 38 2.32302 40.4151 2.29538 45.6667C2.21955 60.0733 2.29538 74.4819 2.29538 88.8889C2.29538 169.667 2.29538 250.444 2.29538 331.222C2.29538 449.963 2.29538 568.704 2.29538 687.444C2.29538 697.963 2.29538 708.481 2.29538 719C2.29538 725.185 2.29538 731.37 2.29538 737.556C2.29538 737.767 2.47524 737.085 2.68426 737.056C4.45989 736.802 6.4001 737 8.18426 737C62.3324 737 116.481 737 170.629 737C248.184 737 325.74 737 403.295 737C407.555 737 411.814 737 416.073 737C423.093 737 423.295 735.975 423.295 744C423.295 752.333 423.295 760.667 423.295 769"
              stroke="#4E5051"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
            />
            <path
              id="path2"
              style={{
                transition: "stroke-dashoffset 3000ms ease",
              }}
              d="M423.131 2C423.131 12.6667 423.131 23.3333 423.131 34C423.131 34.7879 422.836 36.2816 423.131 37C423.937 38.9567 427.293 37.9131 429.409 37.9444C443.498 38.1532 457.598 38 471.687 38C487.576 38 503.465 38 519.354 38C607.687 38 696.02 38 784.354 38C803.872 38 823.391 38 842.909 38C845.354 38 844.104 40.4151 844.131 45.6667C844.207 60.0733 844.131 74.4819 844.131 88.8889C844.131 169.667 844.131 250.444 844.131 331.222C844.131 449.963 844.131 568.704 844.131 687.444C844.131 697.963 844.131 708.481 844.131 719C844.131 725.185 844.131 731.37 844.131 737.556C844.131 737.767 843.952 737.085 843.743 737.056C841.967 736.802 840.027 737 838.243 737C784.094 737 729.946 737 675.798 737C598.243 737 520.687 737 443.131 737C438.872 737 434.613 737 430.354 737C423.334 737 423.131 735.975 423.131 744C423.131 752.333 423.131 760.667 423.131 769"
              stroke="#4E5051"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
            />
          </svg>
        </Box>
        {/* cards */}
        <Grid
          container
          margin={{ xs: "2rem 0" }}
          position={{ xs: "relative", md: "absolute" }}
          top={{ xs: 0, md: "115px" }}
          gap={{ xs: 4, md: 2 }}
        >
          <Grid item md={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              gap={{ xs: 4, md: 8 }}
              height={{ md: "280px", xs: "auto" }}
              margin={{ md: "0.75rem, 0", xs: 0 }}
              sx={{ backgroundColor: "white" }}
            >
              <Grid
                id="card" item maxWidth="22.66669rem">
                <Cardcom cardNum={0} />
              </Grid>
              <Grid
                item
                marginTop={{ xs: 0, md: "-5rem" }}
                maxWidth="22.66669rem"
              >
                <Cardcom cardNum={1} />
              </Grid>
              <Grid item maxWidth="22.66669rem">
                <Cardcom cardNum={2} />
              </Grid>
            </Grid>
          </Grid>
          <Typography
            display={{ xs: "none", md: "block" }}
            zIndex="1"
            fontSize="2.5rem"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="120%"
            margin="-3rem auto"
            textAlign="center"
          >
            Active
            <br />
            Insurance
          </Typography>
          <Grid item md={12}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              gap={{ xs: 4, md: 8 }}
              height={{ md: "280px", xs: "auto" }}
              margin={{ md: "0.75rem, 0", xs: 0 }}
              sx={{ backgroundColor: "white" }}
            >
              <Grid item maxWidth="22.66669rem">
                <Cardcom cardNum={3} />
              </Grid>
              <Grid
                item
                marginBottom={{ xs: 0, md: "-5rem" }}
                maxWidth="22.66669rem"
              >
                <Cardcom cardNum={4} />
              </Grid>
              <Grid item maxWidth="22.66669rem">
                <Cardcom cardNum={5} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* text : Security & Services */}
      <Typography
        fontSize="2rem"
        fontWeight="700"
        lineHeight="120%"
        color="#2B70D7"
      >
        Security & Services
      </Typography>
    </Box>
  );
};

export default Page;
