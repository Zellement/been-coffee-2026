<template>
  <div class="grid grid-cols-1 xl:grid-cols-2">
    <div class="col-span-1 col-start-1 flex h-full max-h-75 xl:row-start-1 xl:max-h-120">
      <NuxtImg
        src="index-03.jpeg"
        alt="Vegan and Low-Gluten Options"
        class="block h-full w-full overflow-hidden object-cover"
        width="1000"
        height="1000"
        fit="cover"
      />
    </div>
    <div
      class="container-px container mx-auto flex w-full text-center xl:col-span-full xl:row-start-1 xl:grid xl:grid-cols-2"
    >
      <div class="text-navy-500 my-auto flex w-full flex-col gap-4 py-20 xl:col-start-2 xl:p-8">
        <h2 class="flex flex-col">
          <DualLineText
            text="Vegan and"
            level="span"
            class="mx-auto text-3xl"
            outline-class="text-butterscotch-500"
          />
          <DualLineText
            text="Low-Gluten Options."
            level="span"
            class="mx-auto text-3xl"
            outline-class="text-butterscotch-500"
          />
        </h2>
        <ul class="flex w-full flex-wrap items-center justify-center gap-2">
          <UBadge icon="i-iconoir-vegan-circle" variant="outline" size="lg" color="tertiary">
            Vegan friendly
          </UBadge>
          <UBadge icon="i-healthicons-gluten-free" variant="outline" size="lg" color="tertiary">
            Low-gluten options
          </UBadge>
        </ul>
        <p class="font-krete mx-auto max-w-160 text-center text-lg xl:text-left">
          We've spent countless hours searching for excellent
          <span class="text-tuscany-500">vegan</span> and
          <span class="text-tuscany-500">low-gluten</span> options so that you don't have to.
        </p>
        <p class="font-krete mx-auto max-w-160 text-center xl:text-left">
          We offer low-gluten bagel alternatives, paninis and many of our cakes are either vegan
          and/or low-gluten.
        </p>
      </div>
    </div>
  </div>
</template>
