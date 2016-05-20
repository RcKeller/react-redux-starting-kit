import {connect} from 'react-redux';
import CardList from '../components/CardList.jsx';

const mapStateToProps = (state) => ({
  cards: state.cardList
});

export default connect(mapStateToProps)(CardList);
