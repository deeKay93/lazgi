import { createStyles, Divider, List, ListItem, ListItemIcon, ListItemText, WithStyles, withStyles } from "@material-ui/core";
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import React, { Component } from "react";

const styles = createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });


export interface Props extends WithStyles<typeof styles> {
    open: boolean,
    onClose: () => void
};

class SidePanel extends Component<Props, {}> {

  render() {
    const { classes } = this.props;
    const sideList = (
        <div>
          <List className={classes.list}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
    return (
        <Drawer open={this.props.open} onClose={this.props.onClose}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.props.onClose}
            onKeyDown={this.props.onClose}
          >
          {sideList}
          </div>
        </Drawer>
    )
  }
}

export default withStyles(styles)(SidePanel);
