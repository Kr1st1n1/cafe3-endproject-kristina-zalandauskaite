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
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontFamily: 'Montserrat' }}>{house.title}</Typography>
      <Typography variant="h5" color="primary" sx={{ mb: 2, fontFamily: 'Montserrat' }}>{`${house.price}$`}</Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Montserrat' }}>{house.description}</Typography>
      <List>
        {[
          { text: house.category.title, Icon: CategoryIcon },
        ].map(({ text, Icon }) => (
          <ListItem key={text}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Box>

);

export default InfoSection;
