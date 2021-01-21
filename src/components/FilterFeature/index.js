import { useState, useEffect } from "react";

import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const FilterFeature = ({ animals, type, handleSubmit }) => {
  const [values, setValues] = useState([]);
  const [url, setUrl] = useState("");
  const [checked, setChecked] = useState("");

  useEffect(() => {
    animals.map((animal) =>
      values.length <= 0 || !values.includes(animal[type])
        ? setValues([...values, animal[type]])
        : animal[type]
    );
  }, [animals, type, values]);

  useEffect(() => {
    handleSubmit(checked, url);
  }, [url, checked, handleSubmit]);

  const selectRadio = (e) => {
    setChecked(e.target.value);
    setUrl(`${type}=${e.target.value}`);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{type}</FormLabel>

      <RadioGroup value={checked} onChange={selectRadio}>
        {values.map((feat, index) => (
          <FormControlLabel
            value={feat}
            control={<Radio color="default" />}
            label={feat}
            key={index}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default FilterFeature;
