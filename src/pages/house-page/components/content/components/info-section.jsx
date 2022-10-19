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
    <Box>
      <Rectangle>
        <Swiper images={house.images} />
      </Rectangle>
      <Box>
        <Typography variant="h4" sx={{ mb: 1, fontFamily: 'Montserrat', fontSize: 24 }}>{house.title}</Typography>
        <Typography variant="h5" color="primary" sx={{ mb: 2, fontFamily: 'Montserrat' }}>{`${house.price}$`}</Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Montserrat', fontSize: 14 }}>{house.description}</Typography>
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
    <Box>
      <Typography>
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Repudiandae voluptate
        voluptates molestiae ipsum ab ea beatae ducimus, voluptatum veniam
        magni totam mollitia rem omnis corporis placeat iste esse provident dolorem.
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Repudiandae voluptate
        voluptates molestiae ipsum ab ea beatae ducimus, voluptatum veniam
        magni totam mollitia rem omnis corporis placeat iste esse provident dolorem.
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Repudiandae voluptate
        voluptates molestiae ipsum ab ea beatae ducimus, voluptatum veniam
        magni totam mollitia rem omnis corporis placeat iste esse provident dolorem.
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Repudiandae voluptate
        voluptates molestiae ipsum ab ea beatae ducimus, voluptatum veniam
        magni totam mollitia rem omnis corporis placeat iste esse provident dolorem.
      </Typography>
    </Box>
  </Box>

);

export default InfoSection;
