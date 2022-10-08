import * as React from 'react';
import {
  Typography,
  Box,
  Divider,
  Slider,
  FormControl,
  Button,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import CategoryService from '../../../services/category-service';
import BathtubService from '../../../services/bathtub-service';
import CheckboxGroup from '../../../components/checkbox-group';
import FilterDrawer from './filter-drawer';

const MIN = 0;
const MAX = 400;

const Filters = ({ drawerWidth }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [initialSetupDone, setIntialSetupDone] = React.useState(false);

  const [categories, setCategories] = React.useState([]);
  const [bathtub, setBathtub] = React.useState([]);

  const [priceRange, setPriceRange] = React.useState([MIN, MAX]);
  const [selectedCategory, setSelctedCategory] = React.useState([]);
  const [selectedBathtub, setSelectedBathtub] = React.useState([]);

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

  const handleBathtubChanges = (_, newBathtub) => {
    const ids = newBathtub.map((bathtubs) => bathtubs.id);
    searchParams.delete('bathtubId');
    ids.forEach((id) => searchParams.append('bathtubId', id));

    setSearchParams(searchParams);
    setSelectedBathtub(newBathtub);
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
      const [fetchedCategories, fetchedBathtub] = await Promise.all([
        CategoryService.fetchAll(),
        BathtubService.fetchAll(),
      ]);

      const priceMinInit = searchParams.get('price_gte') ?? MIN;
      const priceMaxInit = searchParams.get('price_lte') ?? MAX;
      setPriceRange([priceMinInit, priceMaxInit]);

      const selectedCategoryInit = searchParams
        .getAll('categoryId')
        .map((id) => fetchedCategories.find((material) => material.id === id))
        .filter((material) => material !== undefined);
      setSelctedCategory(selectedCategoryInit);

      const selectedBathtubInit = searchParams
        .getAll('bathtubId')
        .map((id) => fetchedCategories.find((type) => type.id === id))
        .filter((type) => type !== undefined);
      setSelectedBathtub(selectedBathtubInit);

      setCategories(fetchedCategories);
      setBathtub(fetchedBathtub);

      setIntialSetupDone(true);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FilterDrawer>
      {initialSetupDone && (
      <Box sx={{
        display: 'flex', flexDirection: 'column', p: 6, gap: 3, mt: 10,
      }}
      >
        <Box sx={{ width: drawerWidth }}>
          <Typography variant="h5">Filters</Typography>
          <Divider sx={{ my: 2 }} />
          <FormControl sx={{ width: '100%' }}>
            <Typography variant="h7" sx={{ alignSelf: 'left', pb: 7 }}>Price range</Typography>
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
          <Divider sx={{ my: 2 }} />
        </Box>
        <CheckboxGroup
          label="Filtruoti pagal miestą"
          options={categories}
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
        <CheckboxGroup
          label="Kubilas"
          options={bathtub}
          value={selectedBathtub}
          onChange={handleBathtubChanges}
        />
        <Button
          variant="contained"
          color="error"
          onClick={deleteFilters}
          sx={{
            minWidth: 200,
            display: 'flex',
            alignSelf: 'center',
            mt: 10,
          }}
        >
          Remove filters
        </Button>
      </Box>
      )}
    </FilterDrawer>
  );
};

export default Filters;
