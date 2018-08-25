import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 400,
    },
    media: {
        height: 200,
    },
    content: {
        height: 100
    }
};

class GameCard extends PureComponent {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    render() {
        const { label, description, img, classes } = this.props;

        return <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={img}
                title={label}
            />
            <CardContent>
                <div className={classes.content}>
                    <Typography gutterBottom variant="headline" component="h2" color='textSecondary'>{label}</Typography>
                    <Typography component="p" color='textPrimary'>{description}</Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button color="primary">Share</Button>
                <Button color="primary">Learn More</Button>
            </CardActions>
        </Card>
    }
}

export default withStyles(styles)(GameCard);