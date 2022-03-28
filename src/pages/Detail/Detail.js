import React from 'react';
import useGif from '../../hooks/useGif';
import Loading from '../../components/Loading/Loading';
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Grid,
  Typography,
  CardActions,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Detail = ({ params }) => {
  const { id } = params;
  const { loading, gif } = useGif(id);

  if (loading) return <Loading />;

  return (
    gif !== undefined && (
      <Grid container justifyContent='center' py={4}>
        <Grid item>
          <Card>
            <CardHeader
              avatar={<Avatar src={gif.user.avatar_url} />}
              title={gif.user.display_name}
              subheader={`@${gif.username}`}
            />
            <CardMedia
              alt={gif.id}
              component='img'
              image={gif.images.downsized.url}
            />
            <CardContent>
              <Typography variant='subtitle2' color='text.secondary'>
                {gif.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label='add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='share'>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
  );
};

export default Detail;
