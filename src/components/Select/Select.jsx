import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go';

function Select({
  register,
  options,
  name,
  defaultValue,
  required = 'false',
  ...otherProps
}) {
  return (
    <SelectWrapper>
      <SelectInput {...register(name, { required: required })} {...otherProps}>
        {defaultValue && (
          <option selected value="" disabled>
            {defaultValue}
          </option>
        )}
        {options?.map((value, index) => (
          <option key={value} value={index + 1}>
            {value}
          </option>
        ))}
      </SelectInput>
      <TriangleDown />
    </SelectWrapper>
  );
}

export default Select;

export const SelectWrapper = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'space-between')};
  position: relative;
  margin: 0 5px 10px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.placeholder};
  transition: border 300ms ease-in-out, background-color 300ms ease-in-out;

  :hover {
    border: 1px solid ${({ theme }) => theme.placeholder};
    background-color: ${({ theme }) => theme.background};
  }
`;

export const SelectInput = styled.select`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 30px 0 15px;
  color: ${({ theme }) => theme.primary};
  border: 0;
  border-radius: 4px;
  background-color: transparent;
  -webkit-appearance: none;

  :focus {
    outline: none;
  }

  &:invalid {
    color: ${({ theme }) => theme.placeholder};
  }
`;

export const TriangleDown = styled(GoTriangleDown)`
  ${({ theme }) => theme.positionCenterY('absolute')};
  right: 5px;
  font-size: 12px;
`;
