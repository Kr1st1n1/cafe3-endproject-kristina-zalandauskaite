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
import CategoryService from '../../../services/category-service';
import CheckboxGroup from '../../../components/checkbox-group';
import FilterDrawer from './filter-drawer';

const MIN = 0;
const MAX = 400;

const Filters = ({ drawerWidth }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSetupDone, setIntialSetupDone] = React.useState(false);

  const [categories, setCategories] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([MIN, MAX]);
  const [selectedCategory, setSelctedCategory] = React.useState([]);

  const handlePriceRangeChange = (_, [min, max]) => {
    if (min === MIN) {
      searchParams.delete('price_gte');
    } else {
      searchParams.set('price_gte', min);
    }
    if (max === MAX) {
      searchParams.delete('price_lte');
    } else {
      searchParams.set('price_lte', max);
    }

    setSearchParams(searchParams);
  };

  const handleCategoryChange = (_, newCategory) => {
    const ids = newCategory.map((category) => category.id);
    searchParams.delete('categoryId');
    ids.forEach((id) => searchParams.append('categoryId', id));

    setSearchParams(searchParams);
    setSelctedCategory(newCategory);
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
      const [fetchedCategories] = await Promise.all([
        CategoryService.fetchAll(),
      ]);

      const priceMinInit = searchParams.get('price_gte') ?? MIN;
      const priceMaxInit = searchParams.get('price_lte') ?? MAX;
      setPriceRange([priceMinInit, priceMaxInit]);

      const selectedCategoryInit = searchParams
        .getAll('categoryId')
        .map((id) => fetchedCategories.find((material) => material.id === id))
        .filter((material) => material !== undefined);
      setSelctedCategory(selectedCategoryInit);

      setCategories(fetchedCategories);

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
                  min={MIN}
                  max={MAX}
                />
              </Box>
            </FormControl>
          </Box>
          <CheckboxGroup
            label="Filtruoti pagal miestą"
            options={categories}
            value={selectedCategory}
            onChange={handleCategoryChange}
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
