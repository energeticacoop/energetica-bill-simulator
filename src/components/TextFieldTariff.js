import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

const TextFieldTariff = ({
  id,
  label,
  value,
  setFunction,
  variant = 'outlined',
  placeholder = '5'
}) => (
  <TextField
    id={id}
    label={label}
    value={value}
    onChange={e => setFunction(+e.target.value)}
    variant={variant}
    placeholder={placeholder}
  />
)

export default TextFieldTariff
