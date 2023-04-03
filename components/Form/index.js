// import { useState } from "react";
import { useImmer } from "use-immer";
import { StyledForm, StyledInputContainer } from "./Form.styled";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(event) {
    const nameInputValue = event.traget.value;

    updateMountain((draft) => {
      draft.name = nameInputValue;
    });
  }

  function handleAltitudeChange(event) {
    const altitudeInputValue = +event.target.value;

    if (altitudeInputValue >= 0 || altitudeInputValue === "Infinity") {
      updateMountain((draft) => {
        draft.values.altitude = altitudeInputValue;
      });
    }
  }

  function handleMountainRangeChange(event) {
    const mountainRangeInputValue = event.target.value;

    updateMountain((draft) => {
      draft.values.mountainRange = mountainRangeInputValue;
    });
  }

  //// native js way (don't forget to uncomment `import {useState}`!):
  // function handleNameChange(event) {
  //   updateMountain({
  //     ...mountain,
  //     name: event.target.value,
  //   });
  // }

  // function handleAltitudeChange(event) {
  //   const altitudeInputValue = +event.target.value;

  //   if (altitudeInputValue >= 0 || altitudeInputValue === "Infinity") {
  //     updateMountain({
  //       ...mountain,
  //       values: {
  //         ...mountain.values,
  //         altitude: altitudeInputValue,
  //       },
  //     });
  //   }
  // }

  // function handleMountainRangeChange(event) {
  //   updateMountain({
  //     ...mountain,
  //     values: {
  //       ...mountain.values,
  //       mountainRange: event.target.value,
  //     },
  //   });
  // }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
