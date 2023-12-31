import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { FormContainer, Title } from 'components/LoginForm/LoginForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authSlice';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign in to continue</Title>

      <FormControl
        sx={{ m: 1, width: '25ch' }}
        variant="outlined"
        error={!!errors.name}
      >
        <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
        <OutlinedInput
          id="outlined-adornment-name"
          type="name"
          label="Name"
          {...register('name', { required: 'Name is required' })}
        />
        <FormHelperText>{errors.name && errors.name.message}</FormHelperText>
      </FormControl>

      <FormControl
        sx={{ m: 1, width: '25ch' }}
        variant="outlined"
        error={!!errors.email}
      >
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type="email"
          label="Email"
          {...register('email', { required: 'Email is required' })}
        />
        <FormHelperText>{errors.email && errors.email.message}</FormHelperText>
      </FormControl>

      <FormControl
        sx={{ m: 1, width: '25ch' }}
        variant="outlined"
        error={!!errors.password}
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          {...register('password', {
            required: 'Password is required',
            minLength: 7,
          })}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText>
          {errors.password && errors.password.message}
        </FormHelperText>
      </FormControl>

      <Button variant="contained" type="submit">
        Sign In
      </Button>
    </FormContainer>
  );
};

export default RegisterPage;
