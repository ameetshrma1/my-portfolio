import { Carousel } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  bannerImage: {
    width: "100%",
    height: "250px",
  },
});

const Banner = () => {
  const classes = useStyles();

  return (
    <Carousel autoplay>
      <div>
        <img
          className={classes.bannerImage}
          src="https://cdn.hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg"
        />
      </div>
      <div>
        <img
          className={classes.bannerImage}
          src="https://ubunlog.com/wp-content/uploads/2020/04/about-nodejs.png"
        />
      </div>

      <div>
        <img
          className={classes.bannerImage}
          src="https://expressjs.com/images/express-facebook-share.png"
        />
      </div>

      <div>
        <img
          className={classes.bannerImage}
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div>
        <img
          className={classes.bannerImage}
          src="https://soshace.com/wp-content/uploads/2019/12/web-development-trends-2020.jpg"
        />
      </div>
    </Carousel>
  );
};

export default Banner;