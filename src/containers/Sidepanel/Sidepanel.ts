import { connect } from "react-redux";
import { StoreState } from "../../state/store";
import { Dispatch, AnyAction } from "redux";
import { SidePanelAction, closeSidePanel } from "../../state/actions/UiActions";
import Sidepanel from "../../components/Sidepanel/Sidepanel";

function mapStateToProps({ ui: { sidepanelOpen } }: StoreState) {
  return {
    open: sidepanelOpen
  };
}

function mapDispatchToProps(dispatch: Dispatch<SidePanelAction>) {
  return {
    onClose: () => dispatch(closeSidePanel())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidepanel);
