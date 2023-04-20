<script setup>
import { ref, onMounted } from 'vue';
import ProductService from '@/service/ProductService';

const dataviewValue = ref(null);
const layout = ref('grid');
const sortOrder = ref(null);
const sortField = ref(null);

const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => (dataviewValue.value = data));
});
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
                    <template #header>
                        <div class="grid grid-nogutter">
                            <div class="col-6 text-left">Your Projects</div>
                            <div class="col-6 text-right">
                                <DataViewLayoutOptions v-model="layout" />
                            </div>
                        </div>
                    </template>
                    <template #list="slotProps">
                        <div class="col-12">
                            <div class="flex flex-column md:flex-row align-items-center p-3 w-full">
                                <div class="flex-1 text-center md:text-left">
                                    <div class="font-bold text-2xl">{{ slotProps.data.name }}</div>
                                    <div class="mb-3">{{ slotProps.data.description }}</div>
                                    <div class="flex align-items-center">
                                        <i class="pi pi-tag mr-2"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </div>
                                </div>
                                <div class="flex flex-row md:flex-column justify-content-between w-full md:w-auto align-items-center md:align-items-end mt-5 md:mt-0">
                                    <span class="text-2xl font-semibold mb-2 align-self-center md:align-self-end">{{ slotProps.data.price }} Members</span>
                                    <Button icon="pi pi-arrow-right" label="View Project" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'" class="mb-2"></Button>
                                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #grid="slotProps">
                        <div class="col-12 md:col-4">
                            <div class="card m-3 border-1 surface-border">
                                <div class="flex align-items-center justify-content-between">
                                    <div class="flex align-items-center">
                                        <i class="pi pi-tag mr-2"></i>
                                        <span class="font-semibold">{{ slotProps.data.category }}</span>
                                    </div>
                                    <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold">{{ slotProps.data.name }}</div>
                                    <div class="mb-3">{{ slotProps.data.description }}</div>
                                </div>
                                <div class="flex align-items-center justify-content-between">
                                    <span class="text-2xl font-semibold">{{ slotProps.data.price }} Members</span>
                                    <Button icon="pi pi-arrow-right" :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/assets/demo/styles/badges.scss';
</style>
