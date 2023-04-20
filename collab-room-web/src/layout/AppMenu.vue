<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Menu',
        items: [
            { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
            { label: 'Groups', icon: 'pi pi-fw pi-users', to: '/pages/groups' },
            { label: 'Projects', icon: 'pi pi-fw pi-book', to: '/pages/projects' },
            { label: 'Tasks', icon: 'pi pi-fw pi-hourglass', to: '/pages/tasks' },
            { label: 'Notifications', icon: 'pi pi-fw pi-megaphone', to: '/pages/notifications' }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
