import * as React from 'react';
import {
  Typography,
  Box,
  Slider,
  FormControl,
  Button,
  Container,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import AutoSelectField from '../../../components/auto-select-field';
import CategoryService from '../../../services/category-service';
import HouseService from '../../../services/house-service';
import FilterDrawer from './filter-drawer';

const Filters = ({ drawerWidth }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSetupDone, setIntialSetupDone] = React.useState(false);

  const [categories, setCategories] = React.useState([]);

  const [priceBounds, setPriceBounds] = React.useState([0, 0]);
  const [priceRange, setPriceRange] = React.useState([0, 0]);
  const [category, setCategory] = React.useState(null);
  const [priceLowerBound, priceHigherBound] = priceBounds;

  const handlePriceRangeChange = (_, [min, max]) => {
    if (min === priceLowerBound) {
      searchParams.delete('price_gte');
    } else {
      searchParams.set('price_gte', min);
    }
    if (max === priceHigherBound) {
      searchParams.delete('price_lte');
    } else {
      searchParams.set('price_lte', max);
    }

    setSearchParams(searchParams);
  };

  const handleCategoryChange = (_, newCategory) => {
    if (newCategory) {
      searchParams.set('categoryId', newCategory.id);
    } else {
      searchParams.delete('categoryId');
    }

    setSearchParams(searchParams);
    setCategory(newCategory);
  };

  const deleteFilters = () => {
    searchParams.delete('price_gte');
    searchParams.delete('price_lte');
    searchParams.delete('categoryId');
    searchParams.delete('bathtupId');

    setSearchParams(searchParams);
  };

  React.useEffect(() => {
    (async () => {
      const [fetchedCategories, fetchedPriceRange] = await Promise.all([
        CategoryService.fetchAll(),
        HouseService.getPriceRange(),
      ]);

      const priceMinInit = searchParams.get('price_gte') ?? fetchedPriceRange[0];
      const priceMaxInit = searchParams.get('price_lte') ?? fetchedPriceRange[1];
      setPriceRange([priceMinInit, priceMaxInit]);

      const selectedCategoryInit = searchParams
        .getAll('categoryId')
        .map((id) => fetchedCategories.find((material) => material.id === id))
        .filter((material) => material !== undefined);
      setCategory(selectedCategoryInit);

      setCategories(fetchedCategories);
      setPriceBounds(fetchedPriceRange);

      setIntialSetupDone(true);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilterDrawer>
      <Container maxWidth="false" sx={{ maxWidth: '1300px' }}>
        {initialSetupDone && (
        <Box sx={{
          display: 'flex', flexDirection: { md: 'row', xs: 'column' }, justifyContent: { lg: 'space-between', xs: 'center' }, alignItems: { lg: 'flex-end', xs: 'center' }, minHeight: 100,
        }}
        >
          <Typography
            variant="h5"
            sx={{
              pt: 7, fontSize: '18px', fontWeight: '600', fontFamily: 'Monserrat',
            }}
          >
            FILTRAI
          </Typography>
          <Box sx={{ width: drawerWidth }}>
            <FormControl sx={{
              width: '100%', my: 5, display: 'flex', alignContent: 'center',
            }}
            >
              <Typography
                variant="h7"
                sx={{
                  display: 'flex', alignSelf: 'center', pt: 7, pb: 2, fontSize: '18px', fontFamily: 'Monserrat',
                }}
              >
                Kaina
              </Typography>
              <Box sx={{
                width: 250,
                display: 'flex',
                alignSelf: { xs: 'center' },
              }}
              >
                <Slider
                  valueLabelDisplay="on"
                  value={priceRange}
                  onChange={(_, newPriceRange) => setPriceRange(newPriceRange)}
                  onChangeCommitted={handlePriceRangeChange}
                  min={priceLowerBound}
                  max={priceHigherBound}
                />
              </Box>
            </FormControl>
          </Box>
          <AutoSelectField
            options={categories}
            value={category.id}
            onChange={handleCategoryChange}
            getOptionLabel={({ title }) => title}
          />
          <Button
            variant="contained"
            color="success"
            onClick={deleteFilters}
            sx={{
              minWidth: 180,
              display: 'flex',
              my: { sx: 5, md: 0 },
            }}
          >
            <Typography sx={{ fontFamily: 'Monseratt', fontSize: 14 }}> Pašalinti filtrus</Typography>
          </Button>
        </Box>
        )}
      </Container>
    </FilterDrawer>
  );
};

export default Filters;
