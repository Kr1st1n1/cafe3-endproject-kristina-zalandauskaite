import React from 'react';
import { Box, Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Image from '../../components/image';
import ImageAbout from '../../assets/cabinone.jpg';
import CheckPoints from './checkPoints';
import ImageMeditation from '../../assets/meditation.jpg';
import ForestRouds from '../../assets/forestrouds.jpg';
import SpaImage from '../../assets/spa.jpg';

const AboutContent = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ backgroundColor: 'common.light', height: '100vh' }}>
      <Container maxWidth="false" sx={{ maxWidth: 1400, pt: 5 }}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel1bh-header"
          >
            <Typography sx={{
              width: '33%',
              flexShrink: 0,
              fontSize: '16px',
              alignText: 'center',
              color: 'primary.dark',
              px: { xs: 1, md: 5 },
              fontWeight: 600,
              fontFamily: 'Montserrat',
              pb: 3,
            }}
            >
              ATSIRADIMAS
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: { xs: 'column', md: 'row' },
            }}
            >
              <Typography sx={{ maxWidth: 450, fontSize: '14px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum quos incidunt reiciendis eveniet
                adipisci natus eaque quaerat iusto, aperiam quae tempore earum debitis
                perferendis quidem ab quo ea explicabo doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum quos incidunt reiciendis eveniet
                adipisci natus eaque quaerat iusto, aperiam quae tempore earum debitis
                perferendis quidem ab quo ea explicabo doloremque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum quos incidunt reiciendis eveniet
                adipisci natus eaque quaerat iusto, aperiam quae tempore earum debitis
                perferendis quidem ab quo ea explicabo doloremque.
              </Typography>

              <Box sx={{
                pt: { xs: 4, lg: 0 }, display: 'flex', alignSelf: 'center', pl: { xs: 0, lg: 20 },
              }}
              >
                <Image
                  src={ImageAbout}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: '-5px 9px 13px 0px',
                    width: { xs: '200px', lg: '300px' },
                  }}
                />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel2bh-header"
          >
            <Typography sx={{
              width: '33%',
              flexShrink: 0,
              alignText: 'center',
              color: 'primary.dark',
              px: { xs: 1, md: 5 },
              fontWeight: 600,
              fontSize: '16px',
              fontFamily: 'Montserrat',
              pb: 3,
            }}
            >
              MEDITACIJA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' },
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CheckPoints />
                <CheckPoints />
                <CheckPoints />
              </Box>

              <Box sx={{
                pt: { xs: 4, lg: 0 }, pb: 4, display: 'flex', alignSelf: 'center', pl: { xs: 0, lg: 20 },
              }}
              >
                <Image
                  src={ImageMeditation}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: '-5px 9px 13px 0px',
                    width: { xs: '200px', lg: '300px' },
                  }}
                />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel3bh-header"
          >
            <Typography sx={{
              width: '33%',
              flexShrink: 0,
              fontSize: '16px',
              alignText: 'center',
              color: 'primary.dark',
              px: { xs: 1, md: 5 },
              fontWeight: 600,
              fontFamily: 'Montserrat',
              pb: 3,
            }}
            >
              MIŠKO TAKAI
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' },
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CheckPoints />
                <CheckPoints />
                <CheckPoints />
              </Box>

              <Box sx={{
                pt: { xs: 4, lg: 0 },
                pb: 4,
                display: 'flex',
                alignSelf: 'center',
                pl: { xs: 0, lg: 5 },
              }}
              >
                <Image
                  src={ForestRouds}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: '-5px 9px 13px 0px',
                    width: { xs: '200px', lg: '300px' },
                  }}
                />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="panel4bh-header"
          >
            <Typography sx={{
              width: '33%',
              flexShrink: 0,
              fontSize: '16px',
              alignText: 'center',
              color: 'primary.dark',
              px: { xs: 1, md: 5 },
              fontWeight: 600,
              fontFamily: 'Montserrat',
              pb: 3,
            }}
            >
              SPA
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' },
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CheckPoints />
                <CheckPoints />
                <CheckPoints />
              </Box>

              <Box sx={{
                pt: { xs: 4, lg: 0 },
                pb: 4,
                display: 'flex',
                alignSelf: 'center',
                pl: { xs: 0, lg: 5 },
              }}
              >
                <Image
                  src={SpaImage}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: '-5px 9px 13px 0px',
                    width: { xs: '200px', lg: '300px' },
                  }}
                />
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default AboutContent;
