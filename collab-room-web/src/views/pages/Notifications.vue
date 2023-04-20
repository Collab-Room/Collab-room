<script>
export default {
    // put some data here 
};
</script>

<template>
    <div class="card">
        <h5>Notifications</h5>
        <Panel header="DSA" :toggleable="true">
            <p class="line-height-3 m-0">Deadline for DSA is 2 days away. Please submit your work.</p>
        </Panel>
        <Panel header="IP" :toggleable="true">
            <p class="line-height-3 m-0">You have been assigned a new project. Please check your email for more details.</p>
        </Panel>
        <Panel header="AP" :toggleable="true">
            <p class="line-height-3 m-0">Ibsa has assigned you a new task for the project. Please check your email for more details.</p>
        </Panel>
        <Panel header="SPM" :toggleable="true">
            <p class="line-height-3 m-0">Your personal project has been sitting idle for a while. Please keep working on it.</p>
        </Panel>
    </div>
</template>
