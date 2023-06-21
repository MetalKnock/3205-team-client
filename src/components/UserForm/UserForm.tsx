/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ERROR_MESSAGES, FormFields, EMAIL_REGEX, NUMBER_REGEX } from 'src/constants/form';
import { FormData } from 'src/types/common.types';
import { PatternFormat } from 'react-number-format';
import { toast } from 'react-toastify';
import { searchUsers } from 'src/api/usersApi';
import { useUsersContext } from 'src/context/UsersContext';
import { InputContainer } from './InputContainer';
import './UserForm.scss';
import { Button } from '../Button';

interface UserFormProps {
  className?: string;
}

export default function UserForm({ className }: UserFormProps) {
  const { setUsers, setIsLoading, setError } = useUsersContext();
  const [abortController, setAbortController] = useState(new AbortController());

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
    abortController.abort();
    const newAbortController = new AbortController();
    setAbortController(newAbortController);

    try {
      setError('');
      setIsLoading(true);
      const number = data.number?.split('-').join('');

      const result = await searchUsers({
        email: data.email,
        number,
        signal: newAbortController.signal,
      });
      setUsers(result);
      setError('');
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        setIsLoading(false);
        setError(error.message);
        toast.error(error.message);
      }
    }
  });

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, [abortController]);
  return (
    <form className={`user-form ${className}`} onSubmit={onSubmit}>
      <h2 className='user-form__title'>Search users</h2>
      <InputContainer
        className='user-form__input-container'
        label={FormFields.email}
        error={errors.email?.message}
      >
        <input
          className='user-form__field'
          type='text'
          id={FormFields.email}
          placeholder='example@gmail.com'
          {...register('email', {
            required: ERROR_MESSAGES.email.required,
            pattern: { value: EMAIL_REGEX, message: ERROR_MESSAGES.email.regex },
          })}
        />
      </InputContainer>
      <InputContainer
        className='user-form__input-container'
        label={FormFields.number}
        error={errors.number?.message}
      >
        <Controller
          control={control}
          name='number'
          rules={{ pattern: { value: NUMBER_REGEX, message: ERROR_MESSAGES.number.regex } }}
          render={({ field: { onChange, name, value } }) => (
            <PatternFormat
              className='user-form__field'
              format='##-##-##'
              mask='_'
              placeholder='12-34-56'
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />
      </InputContainer>
      <Button className='user-form__button' isSubmit>
        Submit
      </Button>
    </form>
  );
}

UserForm.defaultProps = {
  className: '',
};
