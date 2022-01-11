export const flexBox = (
  direction = 'row',
  align = 'center',
  justify = 'center'
) => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
`;

export const positionCenterX = (type = 'absolute') => {
  if (type === 'absolute' || type === 'fixed')
    return `
  position: ${type};
  left: 50%;
  transform: translateX(-50%);
`;
  return;
};

export const positionCenterY = (type = 'absolute') => {
  if (type === 'absolute' || type === 'fixed')
    return `
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
`;
  return;
};

export const positionCenter = (type = 'absolute') => {
  if (type === 'absolute' || type === 'fixed')
    return `
    position: ${type};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
  return;
};
