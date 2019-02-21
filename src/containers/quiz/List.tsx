import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AufgabenCard from '../../components/Quiz/AufgabenCard';
import { addAnswer, checkAnswer, removeAnswer, AnswerAction } from '../../state/actions/AntwortenActions';
import { AufgabenState, StoreState, AntwortenState } from '../../state/types';

const styles = createStyles({});

function mapStateToProps({ aufgaben, antworten }: StoreState) {
	return {
		aufgaben,
		antworten
	};
}

function mapDispatchToProps(dispatch: Dispatch<AnswerAction>) {
	return {
		select: (aufgabe: number, antwort: string) => dispatch(addAnswer(aufgabe, antwort)),
		unselect: (aufgabe: number, antwort: string) => dispatch(removeAnswer(aufgabe, antwort)),
		check: (aufgabe: number) => dispatch(checkAnswer(aufgabe))
	};
}

interface Props extends WithStyles<typeof styles> {
	aufgaben: AufgabenState;
	antworten: AntwortenState;
	select: (aufgabe: number, antwort: string) => void;
	unselect: (aufgabe: number, antwort: string) => void;
	check: (aufgabe: number) => void;
}

class List extends Component<Props> {
	render() {
		const { aufgaben, antworten } = this.props;
		return (
			<div>
				{Object.values(aufgaben)
					.slice(0, 90)
					.map((aufgabe) => (
						<AufgabenCard
							key={aufgabe.nr}
							aufgabe={aufgabe}
							antwort={antworten[aufgabe.nr] || []}
							select={this.props.select}
							unselect={this.props.unselect}
							check={this.props.check}
						/>
					))}
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List));
