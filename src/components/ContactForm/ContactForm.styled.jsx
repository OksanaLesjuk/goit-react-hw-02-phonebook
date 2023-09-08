import styled from 'styled-components';

export const Form = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '40px',

    width: '500px',
    fontSize: '18px',
    fontWeight: '500',
    borderColor: 'black',
  };
});

export const Input = styled('input')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    padding: '4px 8px',
    marginTop: '8px',
    marginBottom: '24px',
    '&:focus': {
      outline: 'none',
      borderColor: 'blue',
    },
  };
});
