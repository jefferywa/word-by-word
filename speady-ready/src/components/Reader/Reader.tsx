import { FC, useEffect, useRef } from "preact/compat";

import styles from "./Reader.module.css";

const ANIMATION_KEYFRAMES = [
  {
    opacity: 0.8,
    transform: "scale(0.8)",
  },
  {
    opacity: 1,
    transform: "scale(1)",
  },
];

const ANIMATION_DURATION = 300;

const createAnimation = (container: Element) =>
  new Animation(
    new KeyframeEffect(container, ANIMATION_KEYFRAMES, {
      duration: ANIMATION_DURATION,
    })
  );

export const Reader: FC<{ word: string; onTogglePlayPause(): void }> = ({
  word,
  onTogglePlayPause,
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const animation = useRef<Animation>(null);

  useEffect(() => {
    if (ref.current && !animation.current) {
      animation.current = createAnimation(ref.current);
    }

    if (ref.current) {
      const readerWrapper = ref.current.parentElement.parentElement;

      ref.current.clientWidth > readerWrapper.clientWidth
        ? ref.current.parentElement.classList.add("overflowing")
        : ref.current.parentElement.classList.remove("overflowing");
    }

    if (animation.current) animation.current.play();
  }, [word]);

  return (
    <section className={styles.Reader} onClick={onTogglePlayPause}>
      <div className={styles.Reader__content}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 300 24"
        >
          <text textLength="290" lengthAdjust="spacing" x="5" y="14">
            {word}
          </text>
        </svg>
        <h1 ref={ref} className={styles.Reader__word}>
          {word}
        </h1>
      </div>
    </section>
  );
};
