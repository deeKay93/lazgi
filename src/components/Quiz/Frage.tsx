import React, { Component } from "react";
import { Frage as iFrage } from "../../state/types";
import { Card, CardHeader, Avatar, CardContent, Typography, withStyles, WithStyles, createStyles, List, ListItem, Checkbox, ListItemText, CardActions, Button, Divider } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";

const styles = createStyles({
  card: {
    maxWidth: "50%",
    margin: 10
  },
  header: {
    display: "flex",
    alignItems: "center"
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
    display: "flex",
    justifyContent: "flex-end"
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
  frage: iFrage;
  // check: (frage: number) => void;
  select: (frage: number, antwort: string) => void;
  unselect: (frage: number, antwort: string) => void;
  check: (frage: number) => void;
}

class Frage extends Component<Props> {
  printItem(antwort: string) {
    const {
      frage: { nr, auswahl, antworten, geprueft, korrekt, loesungen },
      classes,
      select,
      unselect
    } = this.props;
    const selected = antworten.indexOf(antwort) > -1;
    let antwortKorrekt = false;
    if (geprueft) {
      antwortKorrekt = selected ? loesungen.indexOf(antwort) > -1 : loesungen.indexOf(antwort) === -1;
    }
    return (
      <ListItem
        disabled={geprueft}
        className={`${classes.listItem} ${!geprueft ? "" : antwortKorrekt ? classes.correctItem : classes.wrongItem}`}
        key={antwort}
        button
        onClick={() => (selected ? unselect(nr, antwort) : select(nr, antwort))}
      >
        <Checkbox checked={selected} />
        <ListItemText primary={antwort + ") " + auswahl[antwort]} />
      </ListItem>
    );
  }

  render() {
    const {
      frage: { nr, frage, auswahl, geprueft, korrekt },
      classes,
      check
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.header}>
            <Avatar className={`${classes.num} ${!geprueft ? "" : korrekt ? classes.correctAvatar : classes.wrongAvatar}`}>{nr}</Avatar>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
              {frage}
            </Typography>
          </div>

          <List>{Object.keys(auswahl).map(k => this.printItem(k))}</List>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button disabled={geprueft} size="small" onClick={() => check(nr)}>
            <CheckIcon className={classes.leftIcon + " " + classes.iconSmall} />
            Prüfen
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Frage);
