import { Avatar, createStyles, withStyles, WithStyles } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SidePanelAction } from '../../state/actions/UiActions';
import { AufgabenState, StoreState, AntwortenState } from '../../state/types';

const styles = createStyles({
	list: {
		display: 'flex',
		overflowY: 'auto'
	},
	item: {
		width: '2rem',
		height: '2rem',
		fontSize: '1rem',
		marginRight: 1,
		marginLeft: 1
	},
	wrongAvatar: {
		backgroundColor: pink[500]
	},
	correctAvatar: {
		backgroundColor: green[500]
	}
});

function mapStateToProps({ aufgaben, antworten }: StoreState) {
	return {
		aufgaben
	};
}

function mapDispatchToProps(dispatch: Dispatch<SidePanelAction>) {
	return {};
}

interface Props extends WithStyles<typeof styles> {
	aufgaben: AufgabenState;
}

class CompactList extends Component<Props> {
	render() {
		const { aufgaben, classes } = this.props;
		return (
			<div className={classes.list}>
				{Object.values(aufgaben).map((aufgabe) => <Avatar key={aufgabe.nr}>{aufgabe.nr}</Avatar>)}
			</div>
		);
	}
}
export default connect(
	mapStateToProps
	//   ,
	//   mapDispatchToProps
)(withStyles(styles)(CompactList));
