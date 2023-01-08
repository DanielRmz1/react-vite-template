import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const App = ({ children }) => {
	return <div className={styles.app}>{children}</div>;
};

App.propTypes = {
	children: PropTypes.any.isRequired,
};

export default App;
