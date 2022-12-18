import PropTypes from 'prop-types';
import { Buttons } from './Button.styled';

export const Button = ({ text, clickHandler }) => {
    return (
    <Buttons type='button' onClick={clickHandler}>{text}</Buttons>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};