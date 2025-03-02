import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import BaseInput, { InputProps } from '@mui/joy/Input';
import { get } from 'radash';
import React, { forwardRef } from 'react';
import { Control, useFormState } from 'react-hook-form';

type Props = InputProps & {
  control: Control;
  label?: string;
  helperText?: string;
};

const Input = forwardRef((props: Props, ref) => {
  const { errors } = useFormState({
    control: props.control,
  });

  const errorMsg = get(errors, `${props?.name}.message`) as string;

  const { label, ...rest } = props;

  const helperText = errorMsg ? errorMsg : props.helperText;

  return (
    <FormControl error={!!errorMsg}>
      {label && <FormLabel>{label}</FormLabel>}

      <BaseInput
        ref={ref as any}
        // size="sm"
        variant="outlined"
        {...rest}
        error={!!errorMsg}
        // {...(errorMsg
        //   ? {
        //       helperText: errorMsg as any,
        //     }
        //   : {})}
      />

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

export default Input;
