/* eslint-disable react/jsx-props-no-spreading */
import { useForm, Controller } from 'react-hook-form';
import { ERROR_MESSAGES, FormFields, EMAIL_REGEX } from 'src/constants/form';
import { FormData } from 'src/types/common.types';
import { PatternFormat } from 'react-number-format';

export default function Form() {
  const { register, control } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  return (
    <form>
      <input
        type='text'
        id={FormFields.email}
        {...register('email', {
          required: ERROR_MESSAGES.email.required,
          pattern: { value: EMAIL_REGEX, message: ERROR_MESSAGES.email.regex },
        })}
      />
      <Controller
        control={control}
        name='number'
        render={({ field: { onChange, name, value } }) => (
          <PatternFormat format='##-##-##' mask='_' name={name} value={value} onChange={onChange} />
        )}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
