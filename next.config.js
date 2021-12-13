const {
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: [
          "zive-teplice.s3.eu-central-1.amazonaws.com",
          "d374dusjcsfayx.cloudfront.net",
        ],
      },
      env: {
        REACT_APP_BACKEND_URL: "https://zive-teplice-backend.herokuapp.com",
      },
    };
  }

  return {
    images: {
      domains: [
        "zive-teplice.s3.eu-central-1.amazonaws.com",
        "d374dusjcsfayx.cloudfront.net",
      ],
    },

    env: {
      REACT_APP_BACKEND_URL: "https://zive-teplice-backend.herokuapp.com",
    },
  };
};
