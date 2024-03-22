import {useState} from 'react';

const useBoolean = (initialState = false) => {
  const [value, setValue] = useState(initialState);

  const toggle = () => {
    setValue(prevValue => !prevValue);
  };

  const setTrue = () => {
    setValue(true);
  };

  const setFalse = () => {
    setValue(false);
  };

  return {value, toggle, setTrue, setFalse};
};

export default useBoolean;
