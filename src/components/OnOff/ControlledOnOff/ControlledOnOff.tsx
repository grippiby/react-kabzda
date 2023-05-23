import styles from "./ControlledOnOff.module.css";

type OnOffPropsType = {
  on: boolean;
  setOn: () => void;
};

export function ControlledOnOff(props: OnOffPropsType) {
  const red = styles.off;
  const green = styles.on;

  console.log(props.on);
  return (
    <div className={styles.root}>
      <>
        <div
          className={props.on ? green : undefined}
          onClick={() => {
            props.setOn();
          }}
        >
          On
        </div>
        <div
          className={props.on ? undefined : red}
          onClick={() => {
            props.setOn();
          }}
        >
          Off
        </div>
      </>
      <div className={`${styles.circle} ${props.on ? green : red}`}></div>
    </div>
  );
}

/* import styles from './ControlledOnOff.module.css'

type OnOffPropsType = {
	state: boolean
}

export function ControlledOnOff(props: OnOffPropsType) {
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
