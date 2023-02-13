import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'
const Header = (props) => {
  const location = useLocation()
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      {location.pathname === '/' && (
        <Button
          color={props.show ? 'red' : 'green'}
          text={props.show ? 'Hide' : 'Add'}
          onClick={props.showForm}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.prototype = {
  title: PropTypes.string.isRequired,
}

export default Header
