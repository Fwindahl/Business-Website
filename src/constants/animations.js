export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * index,
    },
  }),
};
export const fadeInAnimationNav = {
  initial: {
    scale: 0,
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    scale: 1,
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.3 * index,
    },
  }),
};
