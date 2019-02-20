import { connect } from "react-redux";
import { Dispatch } from "redux";
import MenuIcon from "@material-ui/icons/Menu";
import { SidePanelAction, closeSidePanel, openSidePanel } from "../../state/actions/UiActions";
import React, { Component } from "react";
import { IconButton, createStyles, withStyles, WithStyles } from "@material-ui/core";
import { StoreState, Frage as iFrage } from "../../state/types";
import Frage from "../../components/Quiz/Frage";

const styles = createStyles({});

function mapStateToProps({ quiz: { fragen } }: StoreState) {
  return {
    fragen
  };
}

function mapDispatchToProps(dispatch: Dispatch<SidePanelAction>) {
  return {};
}

interface Props extends WithStyles<typeof styles> {
  fragen: iFrage[];
}

class List extends Component<Props> {
  render() {
    const { fragen } = this.props;
    return (
      <div>
        {fragen.map(frage => (
          <Frage key={frage.nr} frage={frage} />
        ))}
      </div>
    );
  }
}
export default connect(
  mapStateToProps
  //   ,
  //   mapDispatchToProps
)(withStyles(styles)(List));
