import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import Rectangle from '../../../../../components/rectangle';
import Swiper from './swiper';

const InfoSection = ({ house }) => (
  <Box>
    <Rectangle>
      <Swiper images={house.images} />
    </Rectangle>
    <Typography variant="h4" sx={{ mb: 1 }}>{house.title}</Typography>
    <Typography variant="h5" color="primary" sx={{ mb: 2 }}>{`${house.price}${house.currency}`}</Typography>
    <Typography variant="body1">{house.description}</Typography>
    <List>
      {[
        { text: house.category.label, Icon: CategoryIcon },
      ].map(({ text, Icon }) => (
        <ListItem key={text}>
          <ListItemIcon><Icon /></ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Box>

);

export default InfoSection;
