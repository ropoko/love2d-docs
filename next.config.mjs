import nextra from 'nextra';

const withNextra = nextra({
	search: true,
	readingTime: true
});

export default withNextra({
	turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.ts",
    },
  },
	typescript: {
		tsconfigPath: './tsconfig.json'
	}
});
