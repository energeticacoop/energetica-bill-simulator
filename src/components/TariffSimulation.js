import React from 'react'
import { Typography, Divider, Paper } from '@material-ui/core'

import prices from '../tariffs'



export default function TariffSimulation(props) {

  var days = props.values.days
  var daysOverYear = props.values.days / prices.DaysOnYear

  var pricePower1 = props.values.power1.replace(/,/g, '.') *
    prices.Power1 * daysOverYear
  var pricePower2 = props.values.power2.replace(/,/g, '.') *
    prices.Power2 * daysOverYear

  var priceEnergy1 = props.values.energy1.replace(/,/g, '.') * prices.Energy1
  var priceEnergy2 = props.values.energy2.replace(/,/g, '.') * prices.Energy2
  var priceEnergy3 = props.values.energy3.replace(/,/g, '.') * prices.Energy3

  var taxBase = pricePower1 + pricePower2 + priceEnergy1 + priceEnergy2 + priceEnergy3
  var priceIEE = taxBase * prices.IEE
  var priceMeter = props.values.days * prices.Meter
  var priceBeforeVAT = taxBase + priceIEE + priceMeter
  var priceVAT = priceBeforeVAT * prices.VAT
  var totalPrice = (priceBeforeVAT + priceVAT).toFixed(2)

  return (
    < div >
      <Paper>

        <Typography variant="body1">
          Potencia contratada
        </Typography>
        <Typography variant="body2" >
          Periodo P1-P2: {props.values.power1} kW x {prices.Power1} €/kW x  {days}/{prices.DaysOnYear} días = {pricePower1.toFixed(2)} €
        </Typography>
        <Typography variant="body2">
          Periodo P3: {props.values.power2} kW x {prices.Power2} €/kW x  {days}/{prices.DaysOnYear} días = {pricePower2.toFixed(2)} €
        </Typography>
        <Typography variant="body2">
          Total potencia contratada: {(pricePower1 + pricePower2).toFixed(2)} €
        </Typography>
        <Divider />


        <Typography variant="body1">
          Electricidad consumida
        </Typography>
        <Typography variant="body2" >
          Periodo P1: {props.values.energy1} kWh x {prices.Energy1} €/kWh x  = {priceEnergy1.toFixed(2)} €
        </Typography>
        <Typography variant="body2" >
          Periodo P2: {props.values.energy2} kWh x {prices.Energy2} €/kWh x  = {priceEnergy2.toFixed(2)} €
        </Typography>
        <Typography variant="body2" >
          Periodo P2: {props.values.energy3} kWh x {prices.Energy3} €/kWh x  = {priceEnergy3.toFixed(2)} €
        </Typography>
        <Typography variant="body2" >
          Total electricidad consumida: {(priceEnergy1 + priceEnergy2 + priceEnergy3).toFixed(2)} €
        </Typography>
        <Divider />

        <Typography variant="body1">
          Impuesto de Electricidad
        </Typography>
        <Typography variant="body2" >
          {taxBase.toFixed(2)} € x {(prices.IEE * 100).toFixed(5)}% = {priceIEE.toFixed(2)} €
        </Typography>
        <Divider />

        <Typography variant="body1">
          Alquiler del contador
        </Typography>
        <Typography variant="body2" >
          {props.values.days} días x {prices.Meter} €/día = {priceMeter.toFixed(2)} €
        </Typography>
        <Typography variant="body2" >
          Este es el precio regulado del contador inteligente con telegestión, el más habitual.
        </Typography>
        <Typography variant="body2" >
          Si tienes otro tipo su precio puede variar ligeramente (unos 0,50 €/mes).
        </Typography>
        <Divider />

        <Typography variant="body1">
          IVA {prices.VAT * 100}%
        </Typography>
        <Typography variant="body2" >
          {priceBeforeVAT.toFixed(2)} € (base imponible) x {prices.VAT * 100}% = {priceVAT.toFixed(2)} €
        </Typography>
        <Divider />

        <Typography variant="h3">
          Total: {totalPrice} €
        </Typography>
      </Paper>
    </div >

  )

}
