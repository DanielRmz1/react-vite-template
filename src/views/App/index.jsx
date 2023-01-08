import React from "react";
import styles from "./styles.module.scss";
import { Button } from "stories/Button";

const App = () => {
	return (
		<div className={styles.app}>
			Welcome <svg path={"svg"} />
			<Button />
		</div>
	);
};

export default App;
