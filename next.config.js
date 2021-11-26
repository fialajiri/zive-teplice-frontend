const {
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["zive-teplice.s3.eu-central-1.amazonaws.com"],
      },
      env: {        
        REACT_APP_BACKEND_URL: "http://localhost:8081",
      },
    };
  }

  return {
    images: {
      domains: ["zive-teplice.s3.eu-central-1.amazonaws.com"],
    },

    env: {      
      REACT_APP_BACKEND_URL: "http://127.0.0.1:8081",
    },
  };
};