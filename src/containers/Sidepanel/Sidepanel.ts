import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { SidePanelAction, closeSidePanel } from "../../state/actions/UiActions";
import Sidepanel from "../../components/Sidepanel/Sidepanel";
import { StoreState } from "../../state/types";

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
