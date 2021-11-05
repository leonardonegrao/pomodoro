import user from '@testing-library/user-event';

import InputNumber from '.';

import { screen, render } from '@infra/test-utils';

describe('<InputNumber />', () => {
  it('should render component', () => {
    render(<InputNumber value={10} onChange={() => {}} />);

    const inputNumber = screen.getByDisplayValue('10');

    expect(inputNumber).toBeInTheDocument();
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    render(<InputNumber value={10} onChange={onChange} />);

    const addButton = screen.getByTitle('Increment');
    const removeButton = screen.getByTitle('Decrement');

    user.click(addButton); // 1- onChange(11)
    user.click(removeButton); // 1- onChange(9)

    expect(onChange).toHaveBeenNthCalledWith<number[]>(1, 11);
    expect(onChange).toHaveBeenNthCalledWith<number[]>(2, 9);
  });
});