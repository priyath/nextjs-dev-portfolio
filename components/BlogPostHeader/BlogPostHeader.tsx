import Image from 'next/image';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { pseudoSeparator } from './styles';
import { IFrontMatter } from '../../pages/blog/[slug]';
import { getPublishedAtString } from './utils';

interface IBlogPostHeader {
  frontMatter: IFrontMatter;
}

const BlogPostHeader = (props: IBlogPostHeader) => {
  const { frontMatter } = props;

  return (
    <Box sx={{ marginX: 0, marginTop: 4 }}>
      <Typography
        variant={'h4'}
        sx={{ py: 1, fontWeight: 'bold', textAlign: 'left' }}
      >
        {frontMatter?.title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mb: 2,
        }}
      >
        <Box>
          <Typography
            variant={'caption'}
            sx={{
              textAlign: 'left',
              ...pseudoSeparator,
            }}
          >
            {getPublishedAtString(frontMatter?.publishedAt)}
          </Typography>
        </Box>
        <Box>
          <Typography variant={'caption'} sx={{ textAlign: 'left' }}>
            {frontMatter?.readingTime?.text}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Image
          width={'100%'}
          height={55}
          src={`/${frontMatter?.coverImage}`}
          alt="hero image"
          layout="responsive"
          quality={100}
        />
      </Box>
    </Box>
  );
};

export default BlogPostHeader;
