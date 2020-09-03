import React from 'react';

export function Ripple(props) {
  const {
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited = () => {},
    timeout,
  } = props;

  const [leaving, setLeaving] = React.useState(false);

  const rippleClassName = clsx('ripple', 'rippleVisible');

  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX,
  };

  const childClassName = clsx('child', {
    // 根据 leaving，执行结束动画
    childLeaving: leaving,
  });

  React.useEffect(() => {
    if (!inProp) {
      // 执行 exit 动画
      setLeaving(true);

      // Unmount
      const timeoutId = setTimeout(() => {
        onExited();
      }, timeout);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [onExited, inProp, timeout]);

  return (
    <span className={rippleClassName} style={rippleStyles}>
      <span className={childClassName} />
    </span>
  );
}
