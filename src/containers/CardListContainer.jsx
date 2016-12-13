import {connect} from 'react-redux'
import CardList from '../components/CardList.jsx'

const mapStateToProps = (state) => ({
  cards: state.cardList
  // No need to object assign because state.cardList is a blank array
})

export default connect(mapStateToProps)(CardList)
