import React from 'react'

import { useFormik } from 'formik'
import * as yup from 'yup'

import {
  Button,
  Typography,
  TextField,
  Container,
  InputAdornment,
  Grid
} from '@material-ui/core'

import { ThemeProvider } from '@material-ui/core/styles'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import theme from './themeConfig'

import TariffSimulation from './components/TariffSimulation'

const defaultNumberValidationSchema = yup
  .string()
  .required('Campo requerido')
  .trim()
  .matches(/[0-9]+([.,][0-9]+)?$/, 'Formato incorrecto')

const validationSchema = yup.object({
  days: yup
    .string()
    .required('Campo requerido')
    .trim()
    .matches(/^\d+$/, 'Formato incorrecto'),
  power1: defaultNumberValidationSchema,
  power2: defaultNumberValidationSchema,
  energy1: defaultNumberValidationSchema,
  energy2: defaultNumberValidationSchema,
  energy3: defaultNumberValidationSchema
})

const App = () => {
  const formik = useFormik({
    initialValues: {
      days: '',
      power1: '',
      power2: '',
      energy1: '',
      energy2: '',
      energy3: ''
    },
    validationSchema: validationSchema,
    onSubmit: values => {}
  })

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          {/* <Typography variant="h1">Simulador de Tarifa 2.0TD</Typography> */}
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        ¿A cuántos días corresponde tu factura?
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          autoFocus
                          id="days"
                          name="days"
                          label="Días facturados"
                          value={formik.values.days}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.days && Boolean(formik.errors.days)
                          }
                          helperText={formik.touched.days && formik.errors.days}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          ¿Qué potencias tienes contratadas?
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="power1"
                          name="power1"
                          label="Potencia P1-P2"
                          InputProps={{
                            endAdornment: <InputAdornment>kW</InputAdornment>
                          }}
                          value={formik.values.power1}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.power1 &&
                            Boolean(formik.errors.power1)
                          }
                          helperText={
                            formik.touched.power1 && formik.errors.power1
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="power2"
                          name="power2"
                          label="Potencia P3"
                          InputProps={{
                            endAdornment: <InputAdornment>kW</InputAdornment>
                          }}
                          value={formik.values.power2}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.power2 &&
                            Boolean(formik.errors.power2)
                          }
                          helperText={
                            formik.touched.power2 && formik.errors.power2
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          ¿Cuánta electricidad has consumido en cada periodo?
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="energy1"
                          name="energy1"
                          label="Energía P1"
                          InputProps={{
                            endAdornment: <InputAdornment>kWh</InputAdornment>
                          }}
                          value={formik.values.energy1}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.energy1 &&
                            Boolean(formik.errors.energy1)
                          }
                          helperText={
                            formik.touched.energy1 && formik.errors.energy1
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="energy2"
                          name="energy2"
                          label="Energía P2"
                          InputProps={{
                            endAdornment: <InputAdornment>kWh</InputAdornment>
                          }}
                          value={formik.values.energy2}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.energy2 &&
                            Boolean(formik.errors.energy2)
                          }
                          helperText={
                            formik.touched.energy2 && formik.errors.energy2
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField
                          id="energy3"
                          name="energy3"
                          label="Energía P3"
                          InputProps={{
                            endAdornment: <InputAdornment>kWh</InputAdornment>
                          }}
                          value={formik.values.energy3}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.energy3 &&
                            Boolean(formik.errors.energy3)
                          }
                          helperText={
                            formik.touched.energy3 && formik.errors.energy3
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      size="large"
                      color="primary"
                      variant="contained"
                      endIcon={<NavigateNextIcon />}
                    >
                      Calcula cuánto habrías pagado con Energética coop.
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            {formik.submitCount > 0 && formik.isValid ? (
              <Grid item xs={12} lg={6}>
                <Grid container className="priceSimulation">
                  <TariffSimulation {...formik.values} />
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
