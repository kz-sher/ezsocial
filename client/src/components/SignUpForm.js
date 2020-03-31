import React from 'react'

import countries from '../data/countries';
import { Form, Field } from 'formik';
import { map, sortBy} from 'lodash';

import { Grid, Button, Typography, Divider, TextField, MenuItem, IconButton, InputAdornment, LinearProgress, Box} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
    },
}));

function SignUpForm({ errors, touched, isSubmitting }) {
    
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false)
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <Grid className={classes.root} container item direction="row" justify="center" alignItems="center" xs={12} sm={12} spacing={3}>
            <Grid item xs={12}>
                <Box textAlign="center">
                    <Typography variant="h5">Account Creation Form</Typography> 
                    <Typography variant="caption">Please enter the following details based on the instruction</Typography> 
                    {isSubmitting && <LinearProgress />}
                    <Divider variant="middle" />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Form>
                    <Grid container item justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Field
                            type="input"
                            name="username"
                            label="Username"
                            variant="outlined"
                            as={TextField} 
                            error={!!touched.username && !!errors.username}
                            helperText={!!touched.username && !!errors.username && errors.username}
                            fullWidth/>
                        </Grid>
                    </Grid>

                    <Grid container item justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Field
                            type={showPassword ? "text" : "password" }
                            name="password"
                            label="Password"
                            variant="outlined"
                            as={TextField} 
                            error={!!touched.password && !!errors.password}
                            helperText={!!touched.password && !!errors.password && errors.password}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end">
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth/>
                        </Grid>
                    </Grid>

                    <Grid container item justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Field
                            type={showPassword ? "text" : "password" }
                            name="confirmPassword"
                            label="Password Confirmation"
                            variant="outlined"
                            as={TextField}
                            error={!!touched.confirmPassword && !!errors.confirmPassword}
                            helperText={!!touched.confirmPassword && !!errors.confirmPassword && errors.confirmPassword} 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end">
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth/>
                        </Grid>
                    </Grid>

                    <Grid container item justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Field
                            select
                            name="country"
                            label="Country"
                            variant="outlined"
                            as={TextField}    
                            error={!!touched.country && !!errors.country}
                            helperText={!!touched.country && !!errors.country && errors.country}                 
                            fullWidth>
                                <MenuItem value='' disabled selected>
                                    Choose your country
                                </MenuItem>
                                {map(sortBy(countries), (val, key) =>
                                    <MenuItem key={key} value={val}>
                                        {val}
                                    </MenuItem>)}
                            </Field>
                        </Grid>
                    </Grid>

                    <Grid container item justify="center" alignItems="center" spacing={3}>
                        <Grid item>
                            <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            </Grid>
        </Grid>
    )
}

export default SignUpForm
