import { Typography } from '@mui/material';
import * as React from 'react';

const BlogParagraph = (props: any) => {
  return (
    <Typography variant={'body2'} sx={{ marginBottom: { xs: 3, md: 4 } }}>
      {props.children}
    </Typography>
  );
};

export default BlogParagraph;
