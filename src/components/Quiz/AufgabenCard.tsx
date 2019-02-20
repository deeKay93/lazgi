import React, { Component } from 'react';
import { Aufgabe, Antwort } from '../../state/types';
import {
	Card,
	CardHeader,
	Avatar,
	CardContent,
	Typography,
	withStyles,
	WithStyles,
	createStyles,
	List,
	ListItem,
	Checkbox,
	ListItemText,
	CardActions,
	Button,
	Divider
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';

const styles = createStyles({
	card: {
		maxWidth: '50%',
		margin: 10
	},
	header: {
		display: 'flex',
		alignItems: 'center'
	},
	num: {},
	title: {
		flexGrow: 1,
		marginBottom: 0,
		paddingLeft: 10
	},
	listItem: {
		paddingTop: 0,
		paddingBottom: 0
	},
	leftIcon: {
		marginRight: 5
	},
	iconSmall: {
		fontSize: 20
	},
	actions: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	wrongAvatar: {
		backgroundColor: pink[500]
	},
	correctAvatar: {
		backgroundColor: green[500]
	},
	wrongItem: {
		backgroundColor: pink[100]
	},
	correctItem: {
		backgroundColor: green[100]
	}
});

export interface Props extends WithStyles<typeof styles> {
	aufgabe: Aufgabe;
	antwort: Antwort;
	// check: (frage: number) => void;
	select: (frage: number, antwort: string) => void;
	unselect: (frage: number, antwort: string) => void;
	check: (frage: number) => void;
}

class Frage extends Component<Props> {
	printItem(buchstabe: string) {
		const { aufgabe: { nr, auswahl }, antwort, classes, select, unselect } = this.props;
		// const selected = antwort[buchstabe];
		const selected = antwort.indexOf(buchstabe) > -1;
		return (
			<ListItem
				// disabled={geprueft}
				// className={`${classes.listItem} ${!geprueft
				// 	? ''
				// 	: antwortKorrekt ? classes.correctItem : classes.wrongItem}`}
				key={buchstabe}
				button
				onClick={() => (selected ? unselect(nr, buchstabe) : select(nr, buchstabe))}
			>
				<Checkbox color="primary" checked={selected} />
				<ListItemText primary={buchstabe + ') ' + auswahl[buchstabe]} />
			</ListItem>
		);
	}

	render() {
		const { aufgabe: { nr, frage, auswahl }, classes, check } = this.props;
		return (
			<Card className={classes.card}>
				<CardContent>
					<div className={classes.header}>
						<Avatar
						// className={`${classes.num} ${!geprueft
						// 	? ''
						// 	: korrekt ? classes.correctAvatar : classes.wrongAvatar}`}
						>
							{nr}
						</Avatar>
						<Typography className={classes.title} gutterBottom variant="h5" component="h2">
							{frage}
						</Typography>
					</div>

					<List>{Object.keys(auswahl).map((k) => this.printItem(k))}</List>
				</CardContent>
				<CardActions className={classes.actions}>
					<Button size="small" onClick={() => check(nr)}>
						<CheckIcon className={classes.leftIcon + ' ' + classes.iconSmall} />
						Prüfen
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default withStyles(styles)(Frage);
