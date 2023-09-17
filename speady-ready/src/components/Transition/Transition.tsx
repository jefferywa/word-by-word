import { useEffect, useRef, useState } from "preact/hooks";

const ANIMATION_KEYFRAMES = [
  {
    opacity: 0,
    transform: "translateY(50%)",
  },
  {
    opacity: 1,
    transform: "translateY(0%)",
  },
];

const ANIMATION_DURATION = 200;

const createAnimation = (container: Element) =>
  new Animation(
    new KeyframeEffect(container, ANIMATION_KEYFRAMES, {
      duration: ANIMATION_DURATION,
      easing: "ease-in",
    })
  );

export const Transition = ({ children, visibility }) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const animation = useRef<Animation>(null);

  useEffect(() => {
    if (containerRef.current && !animation.current) {
      animation.current = createAnimation(containerRef.current);
    }
  }, []);

  useEffect(() => {
    if (visibility) {
      setVisible(true);
      animation.current?.cancel();
      animation.current?.play();
    } else {
      animation.current?.reverse();
      setTimeout(() => {
        setVisible(false);
        animation.current.updatePlaybackRate(1);
      }, ANIMATION_DURATION);
    }
  }, [visibility]);

  return <div ref={containerRef}>{visible ? children : null}</div>;
};
