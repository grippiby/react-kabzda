import styles from "./OnOff.module.css";
import { useState } from "react";

type OnOffPropsType = {
  /*  state: boolean;*/
};

export function OnOff() {
  const red = styles.off;
  const green = styles.on;
  const [switcher, setSwitcher] = useState(false);

  return (
    <div className={styles.root}>
      <>
        <div
          className={switcher ? green : undefined}
          onClick={() => {
            setSwitcher(true);
          }}
        >
          On
        </div>
        <div
          className={switcher ? undefined : red}
          onClick={() => {
            setSwitcher(false);
          }}
        >
          Off
        </div>
      </>
      <div className={`${styles.circle} ${switcher ? green : red}`}></div>
    </div>
  );
}

/* import styles from './OnOff.module.css'

type OnOffPropsType = {
	state: boolean
}

export function OnOff(props: OnOffPropsType) {
	return (
		<div className={styles.root}>
			{props.state && (
				<>
					<div className={styles.on}>On</div> <div>Off</div>
					<div className={`${styles.circle} ${styles.on}`}></div>
				</>
			)}
			{!props.state && (
				<>
					<div>On</div> <div className={styles.off}>Off</div>
					<div className={`${styles.circle} ${styles.off}`}></div>
				</>
			)}
		</div>
	)
}
 */
