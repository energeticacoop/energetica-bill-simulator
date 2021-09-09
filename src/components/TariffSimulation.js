import React from 'react'
import { Typography, Divider, Paper } from '@material-ui/core'
import {
  DaysOnYear,
  Power1,
  Power2,
  Energy1,
  Energy2,
  Energy3,
  Meter,
  VAT,
  IEE
} from '../tariffs'

export default function TariffSimulation({
  days,
  power1,
  power2,
  energy1,
  energy2,
  energy3
}) {
  const daysOverYear = days / DaysOnYear

  const pricePower1 = power1.replace(/,/g, '.') * Power1 * daysOverYear
  const pricePower2 = power2.replace(/,/g, '.') * Power2 * daysOverYear

  const priceEnergy1 = energy1.replace(/,/g, '.') * Energy1
  const priceEnergy2 = energy2.replace(/,/g, '.') * Energy2
  const priceEnergy3 = energy3.replace(/,/g, '.') * Energy3

  const taxBase =
    pricePower1 + pricePower2 + priceEnergy1 + priceEnergy2 + priceEnergy3
  const priceIEE = taxBase * IEE
  const priceMeter = days * Meter
  const priceBeforeVAT = taxBase + priceIEE + priceMeter
  const priceVAT = priceBeforeVAT * VAT
  const totalPrice = (priceBeforeVAT + priceVAT).toFixed(2)

  return (
    <div>
      <Paper>
        <Typography variant="body1">Potencia contratada</Typography>
        <Typography variant="body2">
          Periodo P1-P2: {power1} kW x {Power1} €/kW x {days}/{DaysOnYear} días
          = {pricePower1.toFixed(2)} €
        </Typography>
        <Typography variant="body2">
          Periodo P3: {power2} kW x {Power2} €/kW x {days}/{DaysOnYear} días ={' '}
          {pricePower2.toFixed(2)} €
        </Typography>
        <Typography variant="body2">
          Total potencia contratada: {(pricePower1 + pricePower2).toFixed(2)} €
        </Typography>
        <Divider />

        <Typography variant="body1">Electricidad consumida</Typography>
        <Typography variant="body2">
          Periodo P1: {energy1} kWh x {Energy1} €/kWh x ={' '}
          {priceEnergy1.toFixed(2)} €
        </Typography>
        <Typography variant="body2">
          Periodo P2: {energy2} kWh x {Energy2} €/kWh x ={' '}
          {priceEnergy2.toFixed(2)} €
        </Typography>
        <Typography variant="body2">
          Periodo P2: {energy3} kWh x {Energy3} €/kWh x ={' '}
          {priceEnergy3.toFixed(2)} €
        </Typography>
        <Typography variant="body2">
          Total electricidad consumida:{' '}
          {(priceEnergy1 + priceEnergy2 + priceEnergy3).toFixed(2)} €
        </Typography>
        <Divider />

        <Typography variant="body1">Impuesto de Electricidad</Typography>
        <Typography variant="body2">
          {taxBase.toFixed(2)} € x {(IEE * 100).toFixed(5)}% ={' '}
          {priceIEE.toFixed(2)} €
        </Typography>
        <Divider />

        <Typography variant="body1">Alquiler del contador</Typography>
        <Typography variant="body2">
          {days} días x {Meter} €/día = {priceMeter.toFixed(2)} €
        </Typography>
        <Typography variant="body2">
          Este es el precio regulado del contador inteligente con telegestión,
          el más habitual.
        </Typography>
        <Typography variant="body2">
          Si tienes otro tipo su precio puede variar ligeramente (unos 0,50
          €/mes).
        </Typography>
        <Divider />

        <Typography variant="body1">IVA {VAT * 100}%</Typography>
        <Typography variant="body2">
          {priceBeforeVAT.toFixed(2)} € (base imponible) x {VAT * 100}% ={' '}
          {priceVAT.toFixed(2)} €
        </Typography>
        <Divider />

        <Typography variant="h3">Total: {totalPrice} €</Typography>

        <br />
        <Typography variant="body2">Precios válidos entre el 1 de septiembre y el 31 de diciembre de 2021 para peaje 2.0TD (potencias contratadas inferiores a 15 kW), el habitual en viviendas y pequeños negocios.</Typography>
      </Paper>
    </div>
  )
}
