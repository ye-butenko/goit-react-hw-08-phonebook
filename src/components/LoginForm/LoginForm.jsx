import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authSlice';
import { FormContainer, Title } from './LoginForm.styled';
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign up to continue</Title>

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

export default LoginForm;
