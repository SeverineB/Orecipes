/* eslint-disable import/prefer-default-export */
import slugify from 'slugify';

export const getSlugByTitle = (title) => {
  const modifiedTitle = title.replace(/['&@]/g, '').replace(/[_]/g, '-');
  return slugify(modifiedTitle, {
    lower: true,
  });
};

export const getUrlByTitle = (title) => {
  return `/recipe/${getSlugByTitle(title)}`;
};

export const getRecipeBySlug = (state, slug) => {
  return state.recipes.list.find((recipe) => {
    return getSlugByTitle(recipe.title) === slug;
  });
};
