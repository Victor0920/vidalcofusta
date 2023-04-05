<script lang="ts">
	import type { PageData } from './$types';
	import { PageSection, ColumnLayout, Component } from '$lib/components';
	import carpentryImg from '$lib/assets/carpentry.webp';

	// import { CaliperIcon, ChiselIcon, FixHomeIcon, HammerIcon } from '$lib/assets/icons';

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

<!-- <PageSection properties={{}}>
	<ColumnLayout columns={4} columnsWidth={[3, 3, 3, 3]}>
		<div class="flex flex-col items-center">
			<CaliperIcon width={80} />
			<h1 class="text-xl font-bold mb-2 mt-3">A medida</h1>
			<p class="text-center">Projectos adaptados a cualquier espacio y ambiente.</p>
		</div>
		<div class="flex flex-col items-center">
			<FixHomeIcon width={80} />
			<h1 class="text-xl font-bold mb-2 mt-3">Restaurar o crear</h1>
			<p class="text-center">Dar una segunda vida a tu muebele o crea uno nuevo.</p>
		</div>
		<div class="flex flex-col items-center">
			<HammerIcon width={80} />
			<h1 class="text-xl font-bold mb-2 mt-3">Reciclado o nuevo</h1>
			<p class="text-center">Puedes elegir utilizar palets y maderas recicladas.</p>
		</div>
		<div class="flex flex-col items-center">
			<ChiselIcon width={80} />
			<Text
				content={{
					title: { size: 'small', text: 'A mano' },
					paragraphs: ['Artesanía 100% para obtener resultados únicos.'],
					textColor: '#000000',
					showLine: false,
					textAlign: 'center'
				}}
			/>
		</div>
	</ColumnLayout>
</PageSection> -->

{#each pageSections as section}
	<PageSection properties={section.sectionProperties}>
		<ColumnLayout columns={section.totalColumns} columnsWidth={section.columnsWidth}>
			{#each section.columns as column}
				{#each column.rows as content}
					<Component component={content} />
				{/each}
			{/each}
		</ColumnLayout>
	</PageSection>
{/each}
