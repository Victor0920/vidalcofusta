<script lang="ts">
	import { PageIntro, PageSection, ColumnLayout, RowsLayout, Component } from '$lib/components';
	import type { PageData } from './$types';

	export let data: PageData;
	const servicesPage = data.page;

	$: meta = servicesPage.meta;
	$: pageSections = servicesPage.pageSections;
</script>

<svelte:head>
	<title>{meta.title} - Vidalco Fusta</title>
	<meta name="description" content={meta.description} />
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
						<div style:width="100%" style:height="100%">
							<Component component={content} />
						</div>
					{/each}
				</RowsLayout>
			{/each}
		</ColumnLayout>
	</PageSection>
{/each}
