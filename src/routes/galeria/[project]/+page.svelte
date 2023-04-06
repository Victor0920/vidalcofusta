<script lang="ts">
	import { PageIntro, PageSection, ColumnLayout, RowsLayout, Component } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	const projectPage = data.page;

	$: meta = projectPage.meta;
	$: pageSections = projectPage.pageSections;
</script>

<svelte:head>
	<title>{meta.title} - Vidalco Fusta</title>
	<meta name="description" content={meta.description} />
	<meta property="og:image" content={meta.imageUrlReduced} />
</svelte:head>

<PageIntro
	imageUrl={meta.imageUrl}
	imageDescription={meta.imageDescription}
	title={meta.title}
	subtitle={meta.description}
/>

{#each pageSections as section}
	<PageSection properties={section.sectionProperties}>
		<ColumnLayout columns={section.totalColumns} columnsWidth={section.columnsWidth}>
			{#each section.columns as column}
				<RowsLayout gap={column.rowProperties?.gap}>
					{#each column.rows as content}
						<div>
							<Component component={content} />
						</div>
					{/each}
				</RowsLayout>
			{/each}
		</ColumnLayout>
	</PageSection>
{/each}
