import React from 'react';
import Star from '../../../../public/static/images/rating_star.svg';
import useStyles from './StarRating.styles';

const StarRating = ({ rating, setRating }) => {
    const classes = useStyles();
    React.useEffect(() => {
        const stars = Array.from(document.getElementsByClassName('StarRating__star'));

        stars.slice(0, rating).forEach((element) => {
            element.classList.add('on');
        });

        stars.slice(rating).forEach((element) => {
            element.classList.remove('on');
        });
    });

    const onClick = (e) => {
        setRating(e.target.getAttribute('value'));
    };

    return (
        <div className={classes.StarRating__container}>
            <button className={classes.StarRating_container_button} type="button" onClick={onClick} value={1}>
                <Star className={classes.StarRating__star} />
            </button>
            <button className={classes.StarRating_container_button} type="button" onClick={onClick} value={2}>
                <Star className={classes.StarRating__star} />
            </button>
            <button className={classes.StarRating_container_button} type="button" onClick={onClick} value={3}>
                <Star className={classes.StarRating__star} />
            </button>
            <button className={classes.StarRating_container_button} type="button" onClick={onClick} value={4}>
                <Star className={classes.StarRating__star} />
            </button>
            <button className={classes.StarRating_container_button} type="button" onClick={onClick} value={5}>
                <Star className={classes.StarRating__star} />
            </button>
        </div>
    );
};

export { StarRating };
