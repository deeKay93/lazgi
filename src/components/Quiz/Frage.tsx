import React, { Component } from "react";
import { Frage as iFrage } from "../../state/types";
import { Card, CardHeader, Avatar, CardContent, Typography, withStyles, WithStyles, createStyles, List, ListItem, Checkbox, ListItemText, CardActions, Button, Divider } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

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
  }
});

export interface Props extends WithStyles<typeof styles> {
  frage: iFrage;
}

class Frage extends Component<Props> {
  render() {
    const {
      frage: { nr, frage, antworten },
      classes
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.header}>
            <Avatar className={classes.num}>{nr}</Avatar>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
              {frage}
            </Typography>
          </div>

          <List>
            {Object.keys(antworten).map(k => (
              <ListItem className={classes.listItem} key={k} button>
                <Checkbox />
                <ListItemText primary={k + ") " + antworten[k]} />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small">
            <CheckIcon className={classes.leftIcon + " " + classes.iconSmall} />
            Prüfen
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Frage);
