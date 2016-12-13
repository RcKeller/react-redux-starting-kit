import {connect} from 'react-redux'
import WelcomeCard from '../components/WelcomeCard.jsx'

const mapStateToProps = (state) => (
  Object.assign({}, state.welcomeCard)
)

export default connect(mapStateToProps)(WelcomeCard)
