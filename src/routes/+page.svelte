<script lang="ts">
	import type { PageData } from './$types';
	import { PageSection, ColumnLayout, Component, RowsLayout } from '$lib/components';
	import carpentryImg from '$lib/assets/carpentry.webp';

	export let data: PageData;
	const homePage = data.page;

	$: meta = homePage.meta;
	$: pageSections = homePage.pageSections;
</script>

<div class="h-[500px] overflow-hidden relative">
	<img
		src={carpentryImg}
		alt="Hombre realizando tareas de carpintería"
		class="w-full object-cover fixed top-0 left-0 h-[600px] -z-20"
	/>
	<div class="fixed top-0 left-0 w-full h-full bg-black opacity-30 -z-10" />

	<div class="absolute top-1/2 left-1/2 -translate-y-[calc(60%)] -translate-x-1/2 text-center">
		<h1 class="font-bold text-6xl mb-4 text-white text-shadow-black">¿Te lo imaginas?</h1>
		<h2 class="font-bold text-3xl mb-4 text-white text-shadow-black">Nosotros lo realizamos.</h2>
		<h2 class="font-bold text-2xl text-white text-shadow-black">
			Proyectos de carpintería a medida
		</h2>
	</div>
</div>

{#each pageSections as section}
	<PageSection properties={section.sectionProperties}>
		<ColumnLayout columns={section.totalColumns} columnsWidth={section.columnsWidth}>
			{#each section.columns as column}
				<RowsLayout gap={column.rowProperties?.gap} marginTop={column.rowProperties?.marginTop}>
					{#each column.rows as content}
						<div style:width="100%">
							<Component component={content} />
						</div>
					{/each}
				</RowsLayout>
			{/each}
		</ColumnLayout>
	</PageSection>
{/each}
