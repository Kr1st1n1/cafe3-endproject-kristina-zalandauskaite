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
      <Container maxWidth="false" sx={{ maxWidth: '1400px' }}>
        {initialSetupDone && (
        <Box sx={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        }}
        >
          <Typography variant="h5" sx={{ pt: 7, fontSize: '18px', fontWeight: '800' }}>FILTRAI</Typography>
          <Box sx={{ width: drawerWidth }}>
            <FormControl sx={{ width: '100%' }}>
              <Typography
                variant="h7"
                sx={{
                  display: 'flex', alignSelf: 'center', pt: 7, fontSize: '18px',
                }}
              >
                Kaina
              </Typography>
              <Box>
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
            value={category}
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
              alignSelf: 'center',
              mt: 10,
            }}
          >
            Pašalinti filtrus
          </Button>
        </Box>
        )}
      </Container>
    </FilterDrawer>
  );
};

export default Filters;
