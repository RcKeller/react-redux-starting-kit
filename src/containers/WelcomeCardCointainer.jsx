import {connect} from 'react-redux'
import WelcomeCard from '../components/WelcomeCard.jsx'

const mapStateToProps = (state) => (
  Object.assign({}, state.welcomeCard)
  // We use object assign because the state being bound is an object.
)

export default connect(mapStateToProps)(WelcomeCard)
