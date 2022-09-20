const data = Object.freeze({
  author: 'Kushajveer Singh',
  title: 'JSON/YAML Graph Visualizer',
  keywords: ['YAML', 'JSON', 'visualizer'],
  urls: [
    {
      name: 'github',
      url: 'https://github.com/KushajveerSingh',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kushaj/',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/Kkushaj',
    },
    {
      name: 'pytorch-forums',
      url: 'https://discuss.pytorch.org/u/Kushaj/summary',
    },
    {
      name: 'fastai-forums',
      url: 'https://forums.fast.ai/u/kushaj',
    },
    {
      blogs: [
        {
          name: 'complete tutorial on Docker',
          url: 'https://www.kushajveersingh.com/blog/docker',
        },
        {
          name: 'write cuda kernels in Triton',
          url: 'https://www.kushajveersingh.com/blog/triton',
        },
      ],
    },
  ],
});

export const json_sample = JSON.stringify(data, null, 2);
