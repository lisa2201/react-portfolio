import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import PortfolioContainer from "../PortfolioContainer/PortfolioContainer";
export default class Home extends Component {
    render() {
        return (
            <>
              <ToastContainer />
            <PortfolioContainer />
            </>
          
        );
    }
}