import React from 'react';
import { useEffect } from 'react';
import { redirectTo } from "@reach/router"

const Redirects = ({location}) => {
  useEffect(() => {
    switch (location.pathname) {
      case "reports/2020":
        redirectTo("reports/2020/report");
        break;
    
      default:
        break;
    }
  },[location])
  return null
};

export default Redirects;