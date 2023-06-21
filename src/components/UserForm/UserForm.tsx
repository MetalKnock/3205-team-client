/* eslint-disable react/jsx-props-no-spreading */
import { useForm, Controller } from 'react-hook-form';
import { ERROR_MESSAGES, FormFields, EMAIL_REGEX, NUMBER_REGEX } from 'src/constants/form';
import { FormData } from 'src/types/common.types';
import { PatternFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import { searchUsers } from 'src/api/usersApi';
import { useUsersContext } from 'src/context/UsersContext';
import { InputContainer } from './InputContainer';

export default function UserForm() {
  const { setUsers, setIsLoading, setError } = useUsersContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      const number = data.number?.split('-').join('');

      const result = await searchUsers(data.email, number);
      setUsers(result);
      setError('');
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false);
        setError(error.message);
        toast.error(error.message);
      }
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <InputContainer label={FormFields.email} error={errors.email?.message}>
        <input
          type='text'
          id={FormFields.email}
          {...register('email', {
            required: ERROR_MESSAGES.email.required,
            pattern: { value: EMAIL_REGEX, message: ERROR_MESSAGES.email.regex },
          })}
        />
      </InputContainer>
      <InputContainer label={FormFields.number} error={errors.number?.message}>
        <Controller
          control={control}
          name='number'
          rules={{ pattern: { value: NUMBER_REGEX, message: ERROR_MESSAGES.number.regex } }}
          render={({ field: { onChange, name, value } }) => (
            <PatternFormat
              format='##-##-##'
              mask='_'
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />
      </InputContainer>
      <button type='submit'>Submit</button>
    </form>
  );
}
