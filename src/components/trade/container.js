import { connect } from "react-redux";
import Trade from "./trade";
import { creators } from "./duck";

const mapStateToProps = state => ({
  ...state.trade,
  ...state.general,
});

const mapDispatchToProps = dispatch => ({
  prefill: order => {
    dispatch(creators.prefill(order));
  },
  onChange: event => {
    dispatch(creators.change({ [event.target.name]: event.target.value }));
  },
  placeOrder: () => {
    dispatch(creators.placeOrder());
  },
});

const TradeContainer = connect(mapStateToProps, mapDispatchToProps)(Trade);

export default TradeContainer;
