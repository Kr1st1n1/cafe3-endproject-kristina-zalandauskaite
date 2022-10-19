import React from 'react';
import { Box, Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Image from '../../components/image';
import ImageAbout from '../../assets/cabinone.jpg';
import ImageAtgaiva from '../../assets/about-pic.jpg';

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
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' },
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <Typography sx={() => ({
                  fontSize: '14px',
                  alignText: 'center',
                  color: 'primary.dark',
                  px: { xs: 1, md: 5 },
                  fontFamily: 'Montserrat',
                })}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. N
                  emo, voluptate! Nesciunt, minima
                  veritatis unde officiis veniam eos sequi eligendi illo voluptatem
                  porro et sit fuga iste esse, dolores eaque sed.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.

                </Typography>
              </Box>

              <Box sx={{
                maxWidth: 300,
                pt: { xs: 4, lg: 0 },
              }}
              >
                <Image
                  src={ImageAbout}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: '-5px 9px 13px 0px',
                    width: { xs: '200px', lg: '250px' },
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
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' },
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <Typography sx={() => ({
                  fontSize: '14px',
                  alignText: 'center',
                  color: 'primary.dark',
                  px: { xs: 1, md: 5 },
                  fontFamily: 'Montserrat',
                })}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. N
                  emo, voluptate! Nesciunt, minima
                  veritatis unde officiis veniam eos sequi eligendi illo voluptatem
                  porro et sit fuga iste esse, dolores eaque sed.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.

                </Typography>
              </Box>

              <Box sx={{
                maxWidth: 300,
                pt: { xs: 4, lg: 0 },
              }}
              >
                <Image
                  src={ImageAtgaiva}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: '-5px 9px 13px 0px',
                    width: { xs: '200px', lg: '250px' },
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
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' },
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <Typography sx={() => ({
                  fontSize: '14px',
                  alignText: 'center',
                  color: 'primary.dark',
                  px: { xs: 1, md: 5 },
                  fontFamily: 'Montserrat',
                })}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. N
                  emo, voluptate! Nesciunt, minima
                  veritatis unde officiis veniam eos sequi eligendi illo voluptatem
                  porro et sit fuga iste esse, dolores eaque sed.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.

                </Typography>
              </Box>

              <Box sx={{
                maxWidth: 300,
                pt: { xs: 4, lg: 0 },
              }}
              >
                <Image
                  src={ImageAtgaiva}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: '-5px 9px 13px 0px',
                    width: { xs: '200px', lg: '250px' },
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
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' },
            }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                <Typography sx={() => ({
                  fontSize: '14px',
                  alignText: 'center',
                  color: 'primary.dark',
                  px: { xs: 1, md: 5 },
                  fontFamily: 'Montserrat',
                })}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. N
                  emo, voluptate! Nesciunt, minima
                  veritatis unde officiis veniam eos sequi eligendi illo voluptatem
                  porro et sit fuga iste esse, dolores eaque sed.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.

                </Typography>
              </Box>

              <Box sx={{
                maxWidth: 300,
                pt: { xs: 4, lg: 0 },
              }}
              >
                <Image
                  src={ImageAtgaiva}
                  sx={{
                    borderRadius: '4px',
                    boxShadow: '-5px 9px 13px 0px',
                    width: { xs: '200px', lg: '250px' },
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
