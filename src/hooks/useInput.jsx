import { useState } from "react";

function useInput(defaultValue = "", type = "") {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (event) => {
    if (type == "body") {
      setValue(event.target.innerHTML);
    } else {
      setValue(event.target.value);
    }
  };

  return [value, onValueChangeHandler];
}

export default useInput;
