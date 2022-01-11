export const color = {
  // gray-scales
  black: '#000',
  dark: '#191a20',
  primary: '#3f4150',
  secondary: '#8c8d96',
  border: '#e0e2e7',
  background: '#f7f8fa',
  white: '#fff',

  // theme-colors
  blue: '#3da5f5',
  darkBlue: '#3186c4',
  lightBlue: '#92DDF6',

  // other-colors
  red: '#FF617A',
};

export const mixins = {
  // flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenterX: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        transform: translateX(-50%);
      `;
    return;
  },

  positionCenterY: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        top: 50%;
        transform: translateY(-50%);
      `;
    return;
  },

  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
};
