import React, { PureComponent } from 'react';
import games from './games';
import GameCard from './GameCard';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    container: {
        margin: theme.spacing.unit * 2,
        display: 'inline-flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    item: {
        margin: theme.spacing.unit * 2,
        flexShrink: 0,
    }
});

class Home extends PureComponent {
    render() {
        const { classes } = this.props;

        return <div className={classes.container}>
            {games.map(game =>
                <div className={classes.item}>
                    <GameCard key={game.id} {...game} />
                </div>
            )}
        </div>;
    }
}

export default withStyles(styles)(Home);