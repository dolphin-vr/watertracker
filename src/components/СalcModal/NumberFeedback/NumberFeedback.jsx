import React, { useState } from 'react';
import {useField } from 'formik';
import { MdCheck } from "react-icons/md";
import { MdClose } from "react-icons/md";



export const NumberFeedback = ({ label, aboveText, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.length > 0) || meta.touched;

  return (
    
     <>
      {aboveText?.trim() && <div>{aboveText}</div>}

      <div>
        <label htmlFor={props.id} className="field-label">
          {label}
          <div>
            <input
              
              type={props.type}
              name={props.name}
              color="blue"
              {...props}
              {...field}
              aria-describedby={`${props.id}-feedback ${props.id}-help`}
              onFocus={handleFocus}
            />
            {showFeedback && (
              <div
                id={`${props.id}-feedback`}
                
                aria-live="polite"
              >
                {meta.error && <MdClose size={24} color="red" />}
                {!meta.error && <MdCheck size={24} color="green" />}
              </div>
            )}
          </div>
        </label>

        {!meta.error && (
          <div id={`${props.id}-help`}  tabIndex="-1">
            {helpText}
          </div>
        )}
        {meta.error && (
          <div
            id={`${props.id}-feedback`}
            
            aria-live="polite"
            tabIndex="-1"
            style={{ color: 'red' }}
          >
            {meta.error}
          </div>
        )}
      </div>
    </>
  );
};