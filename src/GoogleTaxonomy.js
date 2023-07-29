import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import CategoryDetails from './CategoryDetails';

const GoogleTaxonomy = () => {
  const [categoryId, setCategoryId] = useState('');
  const [categoryDetails, setCategoryDetails] = useState(null);

  const handleChange = (event) => {
    const trimmedValue = event.target.value.trim(); // Trim the value
    setCategoryId(trimmedValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/taxonomy-with-ids.en-US.txt');
      const taxonomyText = await response.text();
      const categories = parseTaxonomy(taxonomyText);
      console.log('Parsed Categories:', categories); // Add this line to see the parsed categories
      const categoryDetail = categories.find((category) => category.id === categoryId);
      if (categoryDetail) {
        setCategoryDetails(categoryDetail);
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
    <Container maxWidth="sm" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
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
          Get Category Details
        </Button>
      </form>
      {categoryDetails && <CategoryDetails details={categoryDetails} />}
    </Container>
  );
};

export default GoogleTaxonomy;
