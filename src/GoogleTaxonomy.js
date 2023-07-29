import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import axios from 'axios';
import CategoryDetails from './CategoryDetails';

const GoogleTaxonomy = () => {
  const [categoryId, setCategoryId] = useState('');
  const [categoryDetails, setCategoryDetails] = useState(null);

  useEffect(() => {
    if (categoryDetails) {
      console.log('Category Details:', categoryDetails);
    }
  }, [categoryDetails]);

  const handleChange = (event) => {
    const trimmedValue = event.target.value.trim(); // Trim the value
    setCategoryId(trimmedValue);
  };
  const fetchCategoryImage = async (categoryName) => {
    try {
      const apiKey = 'AIzaSyCzb6SI_JRrp6xLLYV617Ary6n59h36ros';
      const cx = '004286675445984025592:ypgpkv9fjd4';
      const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
        params: {
          q: categoryName,
          cx: cx,
          key: apiKey,
          searchType: 'image',
        },
      });
      if (response?.data?.items?.length > 0) {
        return response.data.items[0].link;
      }
      return null;
    } catch (error) {
      console.error('Error fetching category image:', error);
      return null;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('/taxonomy-with-ids.en-US.txt');
      const taxonomyText = response.data;
      const categories = parseTaxonomy(taxonomyText);
      const categoryDetail = categories.find((category) => category.id === categoryId);
      if (categoryDetail) {
        const imageUrl = await fetchCategoryImage(categoryDetail.name);
        setCategoryDetails({ ...categoryDetail, imageUrl });
      } else {
        console.log('Category ID not found in the Google Taxonomy.');
      }
    } catch (error) {
      console.error('Error reading the Google Taxonomy file:', error);
    }
  };
  const parseTaxonomy = (taxonomyText) => {
    const lines = taxonomyText.split('\n');
    const categories = [];

    const addCategory = (categoryId, categoryName, path) => {
      const category = { id: categoryId, name: categoryName, path: [...path], children: [] };
      categories.push(category);
      return category;
    };

    for (const line of lines) {
      const [categoryId, categoryName] = line.split(' - ');
      if (!categoryId || !categoryName) {
        continue;
      }

      const categoryLevels = categoryName.split(' > ');

      let parent = null;
      let path = [];
      for (const level of categoryLevels) {
        path.push(level);
        const existingCategory = parent
          ? parent.children.find((child) => child.name === level)
          : categories.find((cat) => cat.name === level);

        if (existingCategory) {
          parent = existingCategory;
        } else {
          const category = addCategory(categoryId, level, path);
          if (parent) {
            parent.children.push(category);
            parent = category;
          } else {
            parent = category;
          }
        }
      }
    }

    return categories;
  };

  return (
    <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', overflow: 'hidden' }}>
      <Box p={3} bgcolor="#f0f0f0" borderRadius="8px" boxShadow={3} flexGrow={1} maxWidth="600px">
        <Typography variant="h4" gutterBottom>
          Google Taxonomy Category Details
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Enter Category ID"
            value={categoryId}
            onChange={handleChange}
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
            Get Category Info
          </Button>
        </form>
        {categoryDetails && <CategoryDetails details={categoryDetails} />}
      </Box>
    </Container>
  );
};

export default GoogleTaxonomy;




